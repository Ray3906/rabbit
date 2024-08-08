import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directive/react'
import '@/styles/common.scss'
import { componentPlugin } from './components/composiables/moban/index'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
