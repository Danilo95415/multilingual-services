import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";

import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "nav-item active",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
