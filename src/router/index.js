import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactFactory from '@/pages/ContactFactory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact-factory',
      name: 'contact-factory',
      component: ContactFactory
    }
  ]
})