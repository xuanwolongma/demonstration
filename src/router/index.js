import Vue from 'vue'
import Router from 'vue-router'
import humanum from '../page/humanum'
import deviation from '../page/deviation' //成本中心 成本偏差-
import costunits from '../page/costunits' //成本中心 建筑单位
import cost from '../page/cost'  //成本中心 关键指标
import Cdcapital from '../page/Cdcapital'  //财资中心 关键指标
import crashReports from '../page/crashReports'  //财资中心 资金日报
import situation from '../page/situation'  //财资中心 现金流状况
import annualindicator from '../page/annualindicator' //区域桌面 关键指标
import  sales from "../page/sales" //区域桌面 销售情况
import backmoney from '../page/backmoney' //区域桌面 回款情况
import keyIndicators from '../page/keyIndicators'  //项目桌面 关键指标
import  receivable from "../page/payment.vue"//项目桌面 回款情况
import  project from "../page/project"//项目桌面 营销日报
import mainContainer from '../page/mainContainer'
import percapeffica from '../page/PerCapitaEfficacy'
import adviceSubmit from '../page/adviceSubmit'
import designDetail from '../page/designDetail'
import header from '../components/headerDiv.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContainer',
      component: mainContainer,
      redirect: '/annualindicator',
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
          path:"/perce",
          component:percapeffica
        },
        {
          path:"/advice",
          component:adviceSubmit
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
