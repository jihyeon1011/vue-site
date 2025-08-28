import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import StudyView from './pages/StudyView.vue'
import Ex_WebDesign from './pages/Ex_WebDesign.vue'
import Ex_A1 from './pages/Ex_A1.vue'
import Ex_B2 from './pages/Ex_B2.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/study', component: StudyView },
    {
        path: '/wd/',
        component: Ex_WebDesign,
        children: [
            {
                path: '/wd/a1',
                component: Ex_A1,
            },
            {
                path: '/wd/b2',
                component: Ex_B2
            },
        ],
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router