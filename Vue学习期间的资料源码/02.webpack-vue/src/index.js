//如何在webpack构建项目中，使用Vue开发
console.log("123");



import Vue from '../node_modules/vue/dist/vue.js'
//import Vue from 'vue'

import test,{title,conent} from './test.js'
console.log(test);
console.log(title+'---'+conent);


//在webpack项目中引用，Vue

//导入login组件
import login from './login.vue'

var vm = new Vue({
    el:'#app',
    data:{
        msg:'456'
    }
    ,
    render:c => c(login)
});

