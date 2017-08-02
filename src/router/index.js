import Vue from 'vue'
import Router from 'vue-router'
import humanum from '../page/humanum'
import deviation from '../page/deviation' //成本中心 成本偏差-
import costunits from '../page/costunits' //成本中心 建筑单位
import cost from '../page/cost'  //成本中心 关键指标
import Cdcapital from '../page/Cdcapital'  //财资中心 关键指标
import crashReports from '../page/crashReports'  //财资中心 资金日报
import situation from '../page/situation'  //财资中心 现金流状况
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
          path:"/deviation",
          component:deviation
        },
        {
          path:"/costunits",
          component:costunits
        },
        {
          path:"/Cdcapital",
          component:Cdcapital
        },
        {
          path:"/crashReports",
          component:crashReports
        },
        {
          path:"/situation",
          component:situation
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
