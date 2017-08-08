import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
      path: '/item',
      name: 'page_item',
      component: Item
    }

  ]
})

