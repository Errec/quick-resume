import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: {
      first: 'Raniro',
      last: 'Coelho'
    },
    address: {
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Aimores',
      number: '615',
      complement: '1402',
      country: 'Brazil',
      zip: '30140-070'
    },
    phone: '+55-31-994079886',
    email: 'ranirocoelho@gmail.com'
  },
  actions: actions,
  mutations: mutations,
  getters: getters
})