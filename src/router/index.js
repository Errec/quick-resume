import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeaderFactory from '@/pages/HeaderFactory'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/header-factory',
            name: 'header-factory',
            component: HeaderFactory
        }
    ]
})