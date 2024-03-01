import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "AuthSignin",
    component: () =>
      import(/* webpackChunkName: "auth-signin" */ "../auth/AuthSignin.vue"),
  },
  {
    path: "/stories",
    name: "SroriesHome",
    component: () =>
      import(
        /* webpackChunkName: "stories-home" */ "../stories/StoriesHome.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
