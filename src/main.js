import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./scss/main.scss";
import "./scss/ourServices.scss";
import "./scss/footer.scss";
import VueScrollReveal from "vue-scroll-reveal";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 800,
  scale: 1,
  distance: "100px",
  mobile: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
