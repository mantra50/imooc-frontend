import { createApp } from 'vue'

import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import './styles/style.scss'
import { useRem } from './utils/flexibel'

const app = createApp(App)

useRem()
app.use(pinia)
app.use(router)
app.mount('#app')
