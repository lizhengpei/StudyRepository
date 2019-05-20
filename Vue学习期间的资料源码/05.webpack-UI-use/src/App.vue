<template>
  <div>
    <h1>这是 App 组件---{{ msg }}</h1>


      <mt-button type="danger" @click="show">评论</mt-button>
      <mt-button plain icon="back" type="danger"></mt-button>
      <mt-button plain icon="more" type="danger"></mt-button>
      <mt-button icon="back" type="danger">default</mt-button>
      <mt-button icon="more" type="danger">default</mt-button>
      <mt-button plain type="danger">default</mt-button>
      <mt-button type="danger" size="large">default</mt-button>
      <mt-button disabled type="danger" size="small">default</mt-button>


    <router-link to="/account">这是Account组件</router-link>
    <router-link to="/goodslist">这是GoodsList组件</router-link>

    <router-view></router-view>




      <button type="button" class="mui-btn mui-btn-royal">紫色</button>
  </div>
</template>

<script>

//导入 Toast 组件
import { Toast } from 'mint-ui'

import 'bootstrap/dist/css/bootstrap.css'

export default{
  data(){ //注意：组件中的 data 必须是 function
    return {
      msg:'123',
      toast:null
    }
  },
  created(){
        this.getlist();
    },
  methods:{
      getlist(){    //模拟获取列表的Ajax方法
        this.show();
        setTimeout(() => {
            this.toast.close();
        },3000);
      },
     show(){
       this.toast = Toast({
           message:'你已经评论过了！',
           duration:-1,
           position:'middle',
           iconClass: "glyphicon glyphicon-heart", //设置 图标的类
           className:'myToast' //自定义Toast的样式，需要自己提供一个类名
       });
     }
  }
}

</script>

<style>

</style>
