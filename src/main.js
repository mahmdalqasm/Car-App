import '@/bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ValidationError from '@/components/ValidationError.vue'
import IconSpinner from '@/components/IconSpinner.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('ValidationError', ValidationError)
app.component('IconSpinner', IconSpinner)

app.mount('#app')
