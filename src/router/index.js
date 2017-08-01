import Vue from 'vue'
import Router from 'vue-router'
import humanum from '../page/humanum'
import cost from '../page/cost'
import annualindicator from '../page/annualindicator'
import backmoney from '../page/backmoney'
import keyIndicators from '../page/keyIndicators'
import  receivable from "../page/receivable"
import  project from "../page/project"
import  sales from "../page/sales"
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
        {
          path:"/annualindicator",
          component:annualindicator
        },
        {
          path:"/backmoney",
          component:backmoney
        },
        {
          path:"/keyIndicators",
          component:keyIndicators
        },
        {
          path:"/receivable",
          component:receivable
        },
        {
          path:'/project',
          component:project
        },
        {
          path:"sales",
          component:sales
        }
      ]
    },
  ]
})
