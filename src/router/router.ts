import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routerList: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/view/home/home.vue"),
    meta: {
      title: "登录",
    },
    children: [
      //发现
      {
        path: "/find",
        name: "find",
        component: () => import("@/view/home/components/find.vue"),
      },
      //关注
      {
        path: "/follow",
        name: "follow",
        component: () => import("@/view/home/components/follow.vue"),
      },
      //定位
      {
        path: "/location",
        name: "location",
        component: () => import("@/view/home/components/location.vue"),
      },
    ],
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("@/view/shopping/shopping.vue"),
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component: () => import("@/view/shopcar/shopcar.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/view/login/login.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/view/notice.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routerList,
});

export default router;
