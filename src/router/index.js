import Vue from 'vue'
import Router from 'vue-router'
import humanum from '../page/humanum'
import cost from '../page/cost'
import mainContainer from '../page/mainContainer'
import header from '../components/headerDiv.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContainer',
      component: mainContainer,
      redirect: '/humanum',
      children:[
        {
          path:"/humanum",
          component:humanum
        },
        {
          path:"/cost",
          component:cost
        },
      ]
    },
  ]
})
