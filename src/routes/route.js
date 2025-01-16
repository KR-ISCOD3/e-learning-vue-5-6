import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Course from "../pages/Course.vue";


const routes = [
    { path: '/',component: Home},
    { path: '/course',component: Course},
]

// config
const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;