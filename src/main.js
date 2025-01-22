import { createApp } from 'vue'
import App from './App.vue'
import 'sass'
import './sass/style.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-icons/font/bootstrap-icons.css';
import route from './routes/route'
import { createPinia } from 'pinia'

// createApp(App).use(route).mount('#app')

const app = createApp(App);
const pinia = createPinia();

app.use(route);
app.use(pinia);
app.mount('#app');