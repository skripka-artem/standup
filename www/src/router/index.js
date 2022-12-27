import Vue from "vue";
import Router from "vue-router";
import Home from "../page/Home";
import Afisha from "../page/Afisha";
import Policy from "../page/Policy";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Головна",
      component: Home
    },
    {
      path: "/afisha",
      name: "Афіші",
      component: Afisha
    },
    {
      path: "/privacy-police",
      name: "Policy",
      component: Policy
    }
  ]
});
