import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routerList: Array<RouteRecordRaw> = [
  {
    path: "/",
    name:'home',
    component:()=> import('@/view/home/home.vue'),
    meta:{
        title:"登录"
    }
  },
  {
    path:"/shopping",
    name:'shopping',
    component:()=>import('@/view/shopping/shopping.vue')
  },
  {
    path:"/shopcar",
    name:'shopcar',
    component:()=>import('@/view/shopcar/shopcar.vue')
  },
  {
    path:"/login",
    name:'login',
    component:()=>import('@/view/login/login.vue')
  }
];

export const router = createRouter({
    history:createWebHashHistory(),
    routes:routerList
})

export default router