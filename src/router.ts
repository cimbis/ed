import Builder from '@/pages/Builder.vue'
import Start from '@/pages/Start.vue'
import Survey from '@/pages/Survey.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/builder',
        component: Builder,
    },
    {
        path: '/survey/:id',
        component: Survey,
    },
    {
        path: '/:pathMatch(.*)*',
        alias: '/start',
        component: Start,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
