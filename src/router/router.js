import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "AuthSignin",
    component: () =>
      import(/* webpackChunkName: "auth-signin" */ "../auth/AuthSignin.vue"),
  },
  {
    path: "/dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../dashboard/UserDashboard.vue"
      ),
      children: [
        {
          path: "stories",
          component: () =>
            import(
              /* webpackChunkName: "stories-home" */ "../stories/StoriesHome.vue"
            ),
        },
        {
          path: "discover",
          component: () =>
            import(
              /* webpackChunkName: "discover-home" */ "../discover/DiscoverHome.vue"
            ),
        }, 
      ]
  }, 
  {
    path: '/test',
    component: () => import("../dashboard/TestApp.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
