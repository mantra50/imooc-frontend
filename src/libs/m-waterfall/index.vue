<script setup lang="ts">
import { getImgElements, getImgSrcs, onComplateImgs } from './utils'

const props = defineProps({
  data: {
    type: Array as () => PexelsDataType[],
    required: true
  },
  nodeKey: {
    type: String
  },
  column: {
    type: Number,
    default: 2
  },
  columnSpacing: {
    type: Number,
    default: 20
  },
  rowSpacing: {
    type: Number,
    default: 20
  },
  // 是否需要进行图片预读取
  picturePreReading: {
    type: Boolean,
    default: true
  }
})

// 容器总高度
const containerHeight = ref(400)
// 记录每列高度的容器。key:所在列 value:列高
const containerHeightObj = ref([{}])
/**
 *  构建记录各列的高度的对象
 */
const useColumnHeightObj = () => {
  containerHeightObj.value = [{}]
  for (let i = 0; i < props.column; i++) {
    containerHeightObj.value[i] = 0
  }
}

// 容器实例
const containerTarget = ref<HTMLDivElement | null>(null)
// 容器总宽度（不包含 margin、padding、border)
const containerWidth = ref(0)
// 容器做编辑,计算 item left 时，需要使用定位
const containerLeft = ref(0)
/**
 * 计算容器宽度
 */
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(
    containerTarget.value!,
    null
  )

  // 容器左边距
  containerLeft.value = parseFloat(paddingLeft)
  // 容器宽度
  containerWidth.value =
    containerTarget.value!.offsetWidth -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight)
}

// 每列的宽度
const columnWidth = ref(0)
// 合计列间距
const columnSpacingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing
})

/**
 * 开始计算
 */
const useColumnWidth = () => {
  // 获取容器宽度
  useContainerWidth()
  columnWidth.value =
    (containerWidth.value - columnSpacingTotal.value) / props.column
}

onMounted(() => {
  useColumnWidth()
})

// 需要图片预加载时
// item 高度集合
let itemHeights: number[] = []
/**
 * 监听图片加载完成
 */
const waitImgComplate = () => {
  itemHeights = []
  // 获取所有元素
  let itemElements = [
    ...document.getElementsByClassName('m-waterfall-item')
  ] as HTMLDivElement[]
  // 获取所有 img 元素的标签
  const imgElements = getImgElements(itemElements)
  // 获取所有 img 标签的图片
  const imgSrcs = getImgSrcs(imgElements)

  onComplateImgs(imgSrcs).then(() => {
    // 所有图片加载完成后 将图片高度添加至 itemHeights
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight)
    })
    // 渲染位置
    useItemLocation()
  })
}

/**
 * 不需要预加载图片
 */
const useItemHeight = () => {
  itemHeights = []
  // 获取所有元素
  let itemElements = [
    ...document.getElementsByClassName('m-waterfall-item')
  ] as HTMLDivElement[]
  // 将图片高度添加至 itemHeights
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight)
  })
  // 渲染位置
  useItemLocation()
}

const useItemLocation = () => {
  console.log(itemHeights)
}

watch(
  () => props.data,
  (newVal) => {
    nextTick(() => {
      if (props.picturePreReading) {
        waitImgComplate()
      } else {
        useItemHeight()
      }
    })
  },
  { deep: true, immediate: true }
)
</script>

<template>
  <div
    class="relative"
    ref="containerTarget"
    :style="{
      height: `${containerHeight}px`
    }"
  >
    <!-- 列数不切定 所以需要根据列数计算宽度，等待列宽计算完成且获取到数据源后再渲染 -->
    <template v-if="columnWidth && data.length">
      <div
        class="m-waterfall-item absolute duration-300"
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
        :style="{
          width: `${columnWidth}px`,
          top: `${item._style?.top}px`,
          left: `${item._style?.left}px`
        }"
      >
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
    <div v-else>Loading...</div>
  </div>
</template>

<style lang="scss" scoped></style>
