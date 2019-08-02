// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/normalize.css'
import store from './store'
// 引入MinUI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
//axios
import Axios from './myAxios/myAxios'
Vue.prototype.axios=Axios

Vue.use(Vant)
Vue.use(MintUI)
Vue.use(ElementUI)

Vue.config.productionTip = false
import {Toast } from 'mint-ui';
router.beforeEach((to,from,next)=>{
  console.log('to:',to,to.meta.isLogin);
  if(to.meta.isLogin){
    if(sessionStorage.token&&sessionStorage.username){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'middle',
        duration: 1000
      });
      setTimeout(()=>{
        // next('/login');
        next('/loginfo');
      },1100)
    }
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
