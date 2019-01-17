import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactFactory from '@/pages/ContactFactory'
import AddressFactory from '@/pages/AddressFactory'
import SummaryFactory from '@/pages/SummaryFactory'
import SkillFactory from '@/pages/SkillFactory'
import WorkHistoryFactory from '@/pages/WorkHistoryFactory'

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
    },
    {
      path: '/address-factory',
      name: 'address-factory',
      component: AddressFactory
    },
    {
      path: '/summary-factory',
      name: 'summary-factory',
      component: SummaryFactory
    },
    {
      path: '/skill-factory',
      name: 'skill-factory',
      component: SkillFactory
    },
    {
      path: '/work-history-factory',
      name: 'work-history-factory',
      component: WorkHistoryFactory
    }
  ]
})