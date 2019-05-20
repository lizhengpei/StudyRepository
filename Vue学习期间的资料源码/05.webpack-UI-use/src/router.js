import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter);



// 导入Account组件
import account from './main/Account.vue'
// 导入GoodList组件
import goodslist from './main/GoodsList.vue'

//导入Account的两个子组件
import login from './children-router/login.vue'
import register from './children-router/register.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        //先创建两个组件 1.Account  2.GoodList
        {
            path:'/account',
            component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path:'/goodslist',component:goodslist}

    ]
});

//暴露router模块对象
export default router