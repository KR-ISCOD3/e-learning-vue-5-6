import { createApp } from 'vue'
import App from './App.vue'
import 'sass'
import './sass/style.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-icons/font/bootstrap-icons.css';
import route from './routes/route'

createApp(App).use(route).mount('#app')
