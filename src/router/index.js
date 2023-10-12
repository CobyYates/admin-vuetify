import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/typography",
    name: "typography",
    component: () =>
      import(/* webpackChunkName: "typography" */ "../views/Typography.vue"),
  },
  {
    path: "/colors",
    name: "colors",
    component: () =>
      import(/* webpackChunkName: "colors" */ "../views/Colors.vue"),
  },
  {
    path: "/buttons",
    name: "buttons",
    component: () =>
      import(/* webpackChunkName: "buttons" */ "../views/Buttons.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
