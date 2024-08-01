import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export default pinia

export * from './modules/navigationbar'
export * from './modules/theme'
export * from './modules/app'
export * from './modules/user'
