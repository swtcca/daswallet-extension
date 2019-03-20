import Vue from 'vue'
import App from './App'
import store from '../store'
import Buefy from 'buefy'
//import Vuetify from 'vuetify'
import 'buefy/dist/buefy.css'
//import '@mdi/font/css/materialdesignicons.css'
//import './mdi.scss'

Vue.use(Buefy)
//Vue.use(Vuetify, {iconfont: 'mdi'})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  
  render: h => h(App)
})
