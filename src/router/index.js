import Vue from 'vue'
import Router from 'vue-router'
import menuList from '@/pages/menuList'
import goodsDetails from '@/pages/goodsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menuList',
      component: menuList
    },
    {
      path: '/goodsDetails/:dishTypeId/:dishId',
      name: 'goodsDetails',
      component: goodsDetails
    }
  ]
})
