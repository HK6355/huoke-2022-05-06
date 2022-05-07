import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: () => import('@/view/tag3')
    },
    {
        path: '/tag3',
        component: () => import('@/view/tag3')
    },
    {
        path: '/tag4',
        component: () => import('@/view/tag4')
    },
    {
        path: '/tag5',
        component: () => import('@/view/tag5')
    },
    {
        path: '/tag6',
        component: () => import('@/view/tag6')
    },
    {
        path: '/tag7',
        component: () => import('@/view/tag7')
    },
    {
        path: '/tag8',
        component: () => import('@/view/tag8')
    }
]
const router = new VueRouter({
    routes,
    mode: "hash"
})
export default router