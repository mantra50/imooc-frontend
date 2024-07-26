<script setup lang="ts">
import { isMobileTerminal } from '@/utils/flexibel'
import MobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categoryData = ref([] as CategoryDataType[])

const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  categoryData.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryData()
</script>

<template>
  <MobileNavigation v-if="isMobileTerminal" :data="categoryData" />
</template>

<style lang="scss" scoped></style>
