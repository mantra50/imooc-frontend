import { THEME_TYPE } from '@/constants'
import { useThemeStore } from '@/stores/modules/theme'

let matchMedia: MediaQueryList
const watchSystemThemeChange = () => {
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  matchMedia.onchange = () => {
    changeTheme(THEME_TYPE.THEME_SYSTEM)
  }
}

const changeTheme = (theme: THEME_TYPE) => {
  let themeName = ''
  switch (theme) {
    case THEME_TYPE.THEME_LIGHT:
      themeName = 'light'
      break
    case THEME_TYPE.THEME_DARK:
      themeName = 'dark'
      break
    case THEME_TYPE.THEME_SYSTEM:
      watchSystemThemeChange()
      themeName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  document.querySelector('html')!.className = themeName
}

/**
 * 初始化主题
 */
export default () => {
  const store = useThemeStore()
  watch(
    () => store.themeType,
    (val) => {
      changeTheme(val)
    },
    { immediate: true }
  )
}
