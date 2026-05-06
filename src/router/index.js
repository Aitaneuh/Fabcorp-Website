import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TeamView from '../views/TeamView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/team', name: 'team', component: TeamView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
