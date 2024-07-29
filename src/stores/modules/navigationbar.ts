import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM, CATEGORY_BASE_DATA } from '@/constants'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore(
  'navbar',
  () => {
    const categoryData = ref<CategoryDataType[]>(CATEGORY_BASE_DATA)
    const setCategoryData = async () => {
      const { categorys } = await getCategory()
      categoryData.value = [ALL_CATEGORY_ITEM, ...categorys]
    }

    return { categoryData, setCategoryData }
  },
  { persist: true }
)
