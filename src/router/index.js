import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TemplateA from '@/components/templates/TemplateA'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/template-a',
      name: 'template-a',
      component: TemplateA
    }
  ]
})
