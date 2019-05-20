<template>
  <div>
    <h1>这是 App 组件---{{ msg }}</h1>
    <router-link to="/account">这是Account组件</router-link>
    <router-link to="/goodslist">这是GoodsList组件</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default{
  data(){ //注意：组件中的 data 必须是 function
    return {
      msg:'123'
    }
  },
  methods:{
     show(){
       console.log("调用了 app 组件的 show 方法")
     }
  }
}

</script>

<style>

</style>
