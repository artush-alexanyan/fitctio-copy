import { createApp } from 'vue'
import router from "./router/router"
import './index.css'
import './assets/fonts/fonts.css'
import 'primeicons/primeicons.css';
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
