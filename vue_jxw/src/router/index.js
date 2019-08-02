import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import wrapper from '@/components/wrapper/wrapper'
import login from '@/components/login/login'
import loginfo from '@/components/loginfo/loginfo'
import inline from '@/components/inline/inline'
import jxmarket from '@/components/jxmarket/jxmarket'
import selectcls from '@/components/selectcls/selectcls'
import sort from '@/components/jxmarket/sort'
import listens from '@/components/listens/listens'
import tiku from '@/components/tiku/tiku'
import more from '@/components/more/more'
import seller from '@/components/seller/seller'
import pay from '@/components/pay/pay'
import shopcart from '@/components/shopcart/shopcart'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect:'/wrapper'
    },
    {
      path: '/wrapper',
      name: 'wrapper',
      component: wrapper 
    },
    {
      path: '/tiku',
      name: 'tiku',
      component: tiku 
    },
    {
      path: '/listens',
      name: 'listens',
      meta:{isLogin:true},
      component: listens 
    },
    {
      path: '/jxmarket',
      name: 'jxmarket',
      component: jxmarket ,
      children:[
        {path:"sort",name:"sort",component:sort}
      ]
    },
    {
      path: '/selectcls',
      name: 'selectcls',
      component: selectcls ,
    },
    {
      path: '/inline',
      name: 'inline',
      component: inline 
    },
    {
      path: '/login',
      name: 'logon',
      component: login 
    },
    {
      path: '/loginfo',
      name: 'logonfo',
      component: loginfo 
    },
    {
      path: '/register',
      name: 'register',
      component: login 
    },
    {
      path: '/more',
      name: 'more',
      component: more 
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller ,
      children:[
      ]
    },
    {
      path:'/pay',
      name:"pay",
      meta:{isLogin:true},
      component:pay
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart 
    },

  ]
})
