import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import "./assets/styles/reset.scss";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'https://cinema-api-test.herokuapp.com';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
