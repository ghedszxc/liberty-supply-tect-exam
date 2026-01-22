import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { useGlobalStore } from './stores'

import PrimeVue from 'primevue/config'
import customPreset from './utils/tokens'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.config.globalProperties.$globalStore = useGlobalStore()

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: customPreset,
    options: {
      darkModeSelector: 'light',
    },
  },
})

app.mount('#app')
