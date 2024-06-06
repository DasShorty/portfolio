import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PrivacyView from "@/views/PrivacyView.vue";
import ImprintView from "@/views/ImprintView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/privacy',
            name: "privacy",
            component: PrivacyView
        },
        {
            path: '/imprint',
            name: "imprint",
            component: ImprintView
        }
    ]
})

export default router
