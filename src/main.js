// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js将所有资源都集中起来
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

// 引入bootstrap-vue
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)

// 引入bootstrap 3
// import './assets/css/bootstrap.css'
// import './assets/js/bootstrap.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 此处需要use后，this.$http.get或者this.$http.post才可以
Vue.use(VueRouter)
// Vue.use(VueResource)
