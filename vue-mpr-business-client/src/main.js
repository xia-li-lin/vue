import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "../router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
