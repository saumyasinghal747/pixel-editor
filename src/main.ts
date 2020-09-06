import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVueIcons);Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
