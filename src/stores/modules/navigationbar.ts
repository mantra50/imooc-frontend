import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {
  const categoryData = ref<CategoryDataType[]>([])
  const setCategoryData = async () => {
    const { categorys } = await getCategory()
    categoryData.value = [ALL_CATEGORY_ITEM, ...categorys]
    console.log(categoryData.value)
  }

  return { categoryData, setCategoryData }
})
