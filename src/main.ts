import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useRem } from './utils/flexibel'
import './styles/style.scss'
import myLibs from './libs'
import 'virtual:svg-icons-register'

const app = createApp(App)

useRem()

app.use(createPinia())
app.use(router)
app.use(myLibs)
app.mount('#app')
