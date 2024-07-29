import { THEME_TYPE } from '@/constants'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const themeType = ref(THEME_TYPE.THEME_LIGHT)
    const iconName = ref('theme-light')
    const setThemeType = (val: THEME_TYPE) => {
      themeType.value = val
    }

    return { themeType, setThemeType, iconName }
  },
  { persist: true }
)
