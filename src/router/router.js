import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: () => import('@/views/collection/favorites')
        },
        {
            path: '/handle',
            name: 'handle',
            component: () => import('@/views/manage/handle')
        },
        {
            path: '/option',
            name: 'option',
            component: () => import('@/components/optiontop'),
            children: [
                {
                    path: 'optionindex',
                    name: 'optionindex',
                    component: () => import('@/views/suggestion/option')
                },
                {
                    path: 'confirm',
                    name: 'confirm',
                    component: () => import('@/views/suggestion/confirm')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login')
        },
        {
            path: '/index',
            name: "index",
            component: () => import('@/views/index')
        },
        {
            path: '/mycord',
            name: 'mycord',
            component: () => import('@/views/myCore/personal')
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: () => import('@/views/globalDynamics/dynamic')
        },
        {
            path: '/histroy',
            name: 'history',
            component: () => import('@/components/histroytop'),
            children: [
                {
                    path: 'flow',
                    name: 'flow',
                    component: () => import('@/views/histroy/histroyFlow')
                },
                {
                    path: 'basic',
                    name: 'basic',
                    component: () => import('@/views/histroy/histroyBasic')
                },
                {
                    path: 'enclosure',
                    name: 'enclosure',
                    component: () => import('@/views/histroy/histroyEnclosure')
                },
            ]
        },
        {
            path: '/top',
            name: 'top',
            component: () => import('@/components/top'),
            children: [
                {
                    path: 'wait',
                    name: 'wait',
                    component: () => import('@/views/lntegratedServices/wait')
                },
                {
                    path: 'read',
                    name: 'read',
                    component: () => import('@/views/lntegratedServices/read')
                },
                {
                    path: 'circulate',
                    name: 'circulate',
                    component: () => import('@/views/lntegratedServices/circulate')
                }
            ]
        }

    ]


})
export default router