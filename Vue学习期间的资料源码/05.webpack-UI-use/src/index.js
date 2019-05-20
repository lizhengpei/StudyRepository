//导入Vue包
import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter);

//导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
//导入mui样式
import './lib/mui/css/mui.css'



//导入所有的 MintUI 组件
//导入 mint-UI 包
import MintUI from 'mint-ui'
//这里可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
//将 MintUI 安装到 Vue 中
Vue.use(MintUI);


/*//按需导入Mint-UI组件
import { Button } from 'mint-ui'
//使用Vue.component 注册按钮组件
Vue.component(Button.name,Button);*/





// 导入 app 组件
import app from './App.vue'

//导入自定义路由模块
import router from './router.js'

import test,{title,conent} from './test.js'
console.log(test);
console.log(title+'---'+conent);

var vm = new Vue({
    el: '#app',
    render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和
    // router-link 直接写到 el 所控制的元素中
    router // 4. 将路由对象挂载到 vm 上
});

//注意：App这个组件，是通过 vm 实例的render 函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件只能放在el:'#app'
//指定的元素中；
//Account 和 GoodsList 组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到属于路由的 <router-link> 和 <router-view>中去
