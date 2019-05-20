<template>
    <div class="newsInfo">
        <!--大标题-->
        <h3 class="title">{{ newsInfo.title }}</h3>
        <!--子标题-->
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | dataFormat }}</span>
            <span>点击{{ newsInfo.click }}次</span>
        </p>

        <hr>
        <!--内容区域-->
        <div class="content">{{ newsInfo.zhaiyao }}</div>


        <!--品论区域-->
        <comment-box :id="this.id"></comment-box>

    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponent/comment.vue'

export default{
    data(){
        return {
            id: this.$route.params.id,
            newsInfo:{}     //存放新闻详情
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            this.$http.get('../../data/NewsList/json/NewsList'+ this.id +'.json').then(function(result){
                if(result.body.status === 0){
                    this.newsInfo = result.body.message;
                    console.log("新闻详情获取成功！")
                }else{
                    Toast("新闻详情获取失败！");
                }
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style lang="scss">
    .newsInfo{
        padding:0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: deeppink;
        }
        .subtitle{
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            color: skyblue;
        }
        .content{
            font-size:14px;
            color: gray;
            img{
                width: 100%;
            }
        }
    }
</style>