import Vue from "vue";
import Router from "vue-router";
import Home from "../page/Home";
import Afisha from "../page/Afisha";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Головна",
      component: Home
    },
    {
      path: "/afisha#",
      name: "Афіші",
      component: Afisha
    }
  ]
});
