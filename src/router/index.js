import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frist from '@/components/first'
import A from '@/components/A'
import A1 from '@/components/A1'
import B from '@/components/B'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Frist',
      component: Frist
    },
    {
      path:'/a',
      component:A,
     
    },
    {path:'/a1',component:A1},
    {
      path:'/b',
      component:B
    }
  ]
})
