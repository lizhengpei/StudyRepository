<template>
    <div class="cmt-box">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg">

        </textarea>

        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item"  v-for="(item,i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.User }}&nbsp;&nbsp;发表时间：{{ item.time | dataFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>




        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return{
            pageIndex:1,    //默认展示第一页数据
            comments:[],    //存放评论
            msg:"",          //评论输入的内容
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get("../../data/Comments/json/Comments"+ this.id +".json"+"?pageIndex="+this.pageIndex)
                    .then(function(result){
                if(result.body.status === 0){
                    //每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
                    this.comments = this.comments.concat(result.body.message);
                    console.log("评论加载成功！")
                }else{
                    Toast("评论加载失败！");
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        },
        postComments(){
            if(this.msg.trim().length === 0){
              return Toast("输入的内容不能为空！")
            }
            var cmt = {
                         User:"匿名用户",
                         time: Date.now(),
                         content:this.msg.trim()
                      }
                      this.comments.unshift(cmt);
                      this.msg = "";


                    //由于没有文档接口所以不能使用post方法
            // this.$http.post("../../data/Comments/json/Comments"+this.id+".json",{ conent: this.msg.trim() }).then(function(result){
            //     if(result.body.status === 0){
            //         //拼接出一个评论对象
            //         var cmt = {
            //             User:"匿名用户",
            //             time: Date.now(),
            //             conent:this.msg.trim()
            //         }
            //         this.comments.unshift(cmt);
            //         this.msg = "";
            //     }else{
            //         Toast("发表评论失败！")
            //     }
            // })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-box{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
}
.cmt-list{
    font-size:14px;
    margin:5px 0;
    .cmt-item{

        .cmt-title{
            background-color: lightgray;
            line-height: 30px;
        }
        .cmt-body{
            line-height: 35px;
            text-indent:2em;
        }
    }
}
</style>