// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Jquery from 'jquery'
import store from './store/store.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
