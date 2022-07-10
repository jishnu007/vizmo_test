import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/employees",
    name: "Employees",
    component: () => import("../views/Employees.vue"),
  },
  {
    path: "/stats",
    name: "Stats",
    component: ()=>import("../views/NotFound.vue") 
  },
  {
    path: "/settings",
    name: "Settings",
    component: ()=>import("../views/NotFound.vue") 
  },
  { 
    path: "/:pathMatch(.*)*",
    component: ()=>import("../views/NotFound.vue") 
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
