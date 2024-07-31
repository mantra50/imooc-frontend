import { ALL_CATEGORY_ITEM } from '@/constants'
import { defineStore } from 'pinia'
import { useNavbarStore } from './navigationbar'

export const useAppStore = defineStore('app', () => {
  const navbar = useNavbarStore()

  // 分类和列表联动数据
  const currentCategory = ref(ALL_CATEGORY_ITEM)
  // 更改分类
  const changeCurrentCategory = (newCategory: CategoryDataType) => {
    currentCategory.value = newCategory
  }

  /**
   *  category 选中项的下标
   * @returns
   */
  const currentCategoryIndex = () => {
    return navbar.categoryData.findIndex((item) => {
      return item.id === currentCategory.value.id
    })
  }

  // 搜索和列表联动数据
  const searchText = ref('')
  const changeSearchText = (newText: string) => {
    searchText.value = newText
  }
  return {
    currentCategory,
    changeCurrentCategory,
    currentCategoryIndex,
    searchText,
    changeSearchText
  }
})
