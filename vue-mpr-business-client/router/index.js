import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const loginComponent = () => import("@/views/login/login.vue");

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: loginComponent
    },
    {
      path: "*",
      redirect: "login"
    }
  ]
});
