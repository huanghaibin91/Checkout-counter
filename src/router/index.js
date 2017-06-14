import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
import shoppingList from '../components/shoppingList.vue'
import commodityOperations from '../components/commodityOperations/commodityOperations.vue'
import shoppingCart from '../components/shoppingCart/shoppingCart.vue'
import shoppingRecord from '../components/shoppingRecord.vue'
import messageNotification from '../components/messageNotification.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingList',
      component: shoppingList,
    },
    {
      path: '/commodityOperations',
      name: 'commodityOperations',
      component: commodityOperations,
    },
    {
      path:'/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart,
    },
    {
      path: '/shoppingRecord',
      name: 'shoppingRecord',
      component: shoppingRecord,
    },
    {
      path: '/messageNotification',
      name: 'messageNotification',
      component: messageNotification,
    },
  ]
})
