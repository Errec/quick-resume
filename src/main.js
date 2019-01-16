import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Vuetify)
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})