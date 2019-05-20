<template>
    <div class="body">
        <div class="photo-div">
            <h3 class="title">{{ photoContentList.title }}</h3>
            <p class="subtitle">
                <span>发表时间：{{ photoContentList.time | dataFormat }}</span>
                <span>点击：{{ photoContentList.click }}次</span>
            </p>

            <hr>


            <!-- 缩略图区域 -->
                <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" 
                height="70px" @click="$preview.open(index, list)" :key="item.src"> -->
                <div class="img-so-big">
                    <vue-preview :slides="list" @close="handleClose"></vue-preview>
                </div>



            <!-- 图片内容区域 -->
            <div class="contnet" v-html="photoContentList.content">

            </div>
        </div>
        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box class="cmt-box" :id="id"></cmt-box>
    </div>
</template>


<script>
// import './lib/CSS/golbal.css'
import comment from '../subcomponent/comment.vue'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoContentList:{},
            list:[
                
            ]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getPhotoList();
    },
    methods:{
         getPhotoInfo(){
             this.$http.get('../../data/Photo/json/img'+this.id+'.json').then(result => {
                 if(result.body.status === 0){
                    Toast('获取成功！');
                    this.photoContentList = result.body.message[0];
                 }
             })
         },
         getPhotoList(){
             this.$http.get('../../data/Photo/json/img.json').then(function(result){
				if(result.body.status === 0){
					Toast("获取图片成功！")
					result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc=item.src
                    });
                    this.list = result.body.message;
				}else{
					Toast("获取图片失败！")
				}
			})
         },handleClose () {
        console.log('close event')
      }  
    },
    components:{
        'cmt-box':comment
    }
}
</script>


<style lang='scss'>
img {
    border: 0;
    width: 115px;
    height: 80px;
    
}
.img-so-big{
    div{
        div{
            figure{
                padding: 0px;
                margin: 0px; 
                display:inline; 
            }
        }
    
    }
    a{
        padding: 0px;
        margin: 0px; 
        display:inline; 
    }
}
.title{
    text-align: center;
    padding-bottom: 2px;
    color: blue;
}
.subtitle{
    color: black;
    display: flex;
    justify-content: space-between;
}
.contnet{
    font-size: 14px;
    line-height: 30px;
}
.cmt-box{
    padding: 5px;
}
.photo-div{
    padding: 5px;
}
</style>
