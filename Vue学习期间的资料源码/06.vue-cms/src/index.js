//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入 App 主组件
import app from './App.vue'
//导入 Mint-UI中 的组件
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
//导入 MUI 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/CSS/golbal.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)




//导入自己的 router.js 模块
import router from './router'

//导入 vue-resource 包
import VueResource from 'vue-resource'
//手动安装 vue-resource
Vue.use(VueResource);
Vue.http.options.emulateHTTP = true;

//导入格式化时间的插件
import moment from 'moment'

Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
});



var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
});



