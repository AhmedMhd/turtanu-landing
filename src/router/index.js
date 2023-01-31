import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OurServices from "../views/OurServices.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ourServices",
    name: "Our-services",
    component: OurServices
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
