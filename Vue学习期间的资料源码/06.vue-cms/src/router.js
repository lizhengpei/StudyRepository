//导入 vue 包
import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter);


//导入对应的组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import ShopCar from './components/tabbar/ShopCar.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [   //配置路由规则
        {path:'/',redirect:'/home'},
        { path : '/home' , component : Home },
        { path : '/member' , component : Member },
        { path : '/shopcar' , component : ShopCar },
        { path : '/search' , component : Search },
        { path : '/home/newslist' , component: NewsList},
        { path : '/home/newsinfo/:id' , component : NewsInfo },
        { path : '/home/photolist' , component : PhotoList },
        { path : '/home/photoinfo/:id' , component : PhotoInfo }
    ],
    linkActiveClass: 'mui-active'   //覆盖默认的路由高亮的类，默认的类叫做router-link-active
});

//暴露router模块对象
export default router