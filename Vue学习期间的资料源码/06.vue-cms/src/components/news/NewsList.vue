<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dataFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default{
    data(){
        return{
            newslist:[]    //存放新闻列表
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('../../data/NewsList/json/NewsList.json').then(function(result){
                if(result.body.status === 0){
                    this.newslist = result.body.message;
                    Toast("加载成功");
                    console.log("新闻列表加载成功！")
                }else{
                    Toast("新闻列表加载失败！");
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size: 14px;}
        }
    .mui-ellipsis{
        font-size: 12px;
        color: skyblue;
        display: flex;
        justify-content: space-between;
    }
    }
</style>