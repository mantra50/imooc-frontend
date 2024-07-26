<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'

defineProps({
  data: {
    type: Array<CategoryDataType>,
    required: true
  }
})

const sliderRef = ref<HTMLLIElement | null>(null)
const sliderStyle = ref({
  width: '50px',
  transform: 'translateX(0px)'
})

// 选中的item下标
const currentInex = ref(0)
let itemRefs = [] as HTMLLIElement[]
const setItemsRef = (el: any) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})

// 获取 ul 元素，用以计算偏移位置
const ulTarget = ref<HTMLUListElement | null>(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentInex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    width: `${width}px`,
    transform: `translateX(${left + ulScrollLeft.value - 10}px)`
  }
})

const showPopup = ref(false)
const showPopupClick = () => {
  showPopup.value = true
}

const onItemClick = (index: number) => {
  currentInex.value = index
  showPopup.value = false
}
</script>

<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <li
        ref="sliderRef"
        class="absolute h-[24px] duration-200 bg-zinc-900 rounded-lg"
        :style="sliderStyle"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        @click="showPopupClick"
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': currentInex === index }"
        :ref="setItemsRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <m-popup v-model="showPopup">
    <MenuVue :data="data" @on-item-click="onItemClick" />
  </m-popup>
</template>

<style lang="scss" scoped></style>
