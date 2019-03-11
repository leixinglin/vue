import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import { routes } from './router';


//Vue.config.productionTip = false
Vue.use(VueRouter)



const router=new VueRouter({
  routes,mode:"history",
  //滚蛋设置
  scrollBehavior(to,from,savePosition){
    console.log("scrollBehavior");
    //return {x:0,y:100}
    //return {selector:'.btn'}
    if(savePosition){
      return savePosition;
    }else{
      return {x:0,y:100}
    }
  }
});

//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=="/login"||to.path=="/register"){
//     next();
//   }else{
//     alert("还没登录，请先登录！");
//     next("/login");
//   }
// });

new Vue({

  el: '#app',
  router,
  render: h => h(App)
})
