import Vue from 'vue'

import AppComponent from './components/App/index.vue'

window.Vue = Vue;

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: h => h('app')
})