import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vuetify from '@/libs/vuetify'

// plugin
// import * as bootstrap from 'bootstrap'
import VueFullPage from 'vue-fullpage.js'

// plugin style
import 'vue-fullpage.js/dist/style.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/base.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(VueFullPage)
// app.use(bootstrap)

app.mount('#app')
