import Vue from 'vue'
import App from './App.vue'
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle.min'
import "@/assets/scss/styles.scss";

import Navbar from "@/components/Navbar.vue"

Vue.config.productionTip = false;
// eslint-disable-next-line
Vue.component('Navbar', Navbar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
