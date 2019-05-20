<template>
    <div>
        <h1>这是 Account 组件</h1>


        <router-link to="/account/login">login 子组件</router-link>
        <router-link to="/account/register">register 子组件</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    /*普通的 style 标签只支持普通的样式，如果想启用 scss 或者 less，需要为 style 元素，设置 lang 属性值*/
    /*只要 style 标签是在 .vue 中定义的，那么推荐都为 style 标签开启 scoped 属性*/
    body {
        div{
            font-style: italic;
        }
    }

</style>