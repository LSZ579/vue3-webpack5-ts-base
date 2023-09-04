

import { type RouteRecordRaw, createRouter,createWebHashHistory}  from "vue-router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
interface route {
    path:string,
    name?:string,
    component:any
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '系统首页',
        component: () => import('../views/index/index.vue'),
    },
    {
        path:'/about/my',
        name:'个人中心',
        component:()=>import('../views/model/about/my/index.vue')
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to,form,next)=>{
    NProgress.start()
    console.log(to)
    next()
})

router.afterEach((to,from,next)=>{
    NProgress.done()
})