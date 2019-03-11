import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Manager from './components/Manager'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Test1 from './components/about/test1'
import Test2 from './components/about/test2'
import Test3 from './components/about/test3'

export const routes=[{path:"/",
  //组件复用
  components:{default:Home,"test1":Test1,"test2":Test2
    ,"test3":Test3
}}
  ,{path:"/menu",name:"menuLink",component:Menu}
  ,{path:"/about",component:About,redirect:"/about/test1",children:[
      {path:"/about/test1",component:Test1}
      ,{path:"/about/test2",component:Test2}
      ,{path:"/about/test3",component:Test3}
    ]}
  ,{path:"/manager",component:Manager
    // ,beforeEnter:(to,from,next)=>{
    // //独享守卫
    // // alert("路由独享守卫！");
    //   // next(false);
    // }
  }
  ,{path:"/login",component:Login}
  ,{path:"/register",component:Register}
  //属于其他地址将跳转到首页
  ,{path:"*",redirect:"/"}
];
