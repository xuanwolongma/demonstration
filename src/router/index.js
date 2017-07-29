import Vue from 'vue'
import Router from 'vue-router'
import humanum from '../page/humanum'
import cost from '../page/cost'
import annualindicator from '../page/annualindicator'
import backmoney from '../page/backmoney'
import mainContainer from '../page/mainContainer'
import percapeffica from '../page/PerCapitaEfficacy'
import adviceSubmit from '../page/adviceSubmit'
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
        },{
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
        }
      ]
    },
  ]
})
