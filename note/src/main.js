// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Loading from './components/loading'
// import store from './store'
Vue.use(Loading)
Vue.config.productionTip = false
// import Vuenote from './index.js';
// Vue.use(Vuenote)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  components: { App },
  template: '<App/>'
})
