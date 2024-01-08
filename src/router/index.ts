import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: "/film",
    name: "Film",
    component: () => import("@/pages/FilmPage.vue"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("@/pages/KontaktPage.vue"),
  },
  {
    path: "/program",
    name: "Program",
    component: () => import("@/pages/ProgramPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
