import Vue from 'vue'
import Router from 'vue-router'
import menuList from '@/pages/menuList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menuList',
      component: menuList
    }
  ]
})
