<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a v-for="item in typeList" :key="item.typeId" 
						:class="['mui-control-item',item.typeId == 1 ? 'mui-active' : '']" @click="getPhotoList(item.typeId)">
							{{ item.typeName }}
						</a>
					</div>
				</div>
			</div>



			<ul>
  				<router-link v-for="item in photoList" :key="item.img_id" :to="'/home/photoinfo/'+item.img_id" tag="li">
    				<img v-lazy="item.img_url">
					<div class="info">
						<h5 class="title-info">{{ item.title }}</h5>
						<div class="content-info">{{ item.content }}</div>
					</div>
  				</router-link>
			</ul>
    </div>
</template>

<script>
import Vue from 'vue'
import mui from '../../lib/mui/js/mui.min.js'
import { Toast,Lazyload } from 'mint-ui';
Vue.use(Lazyload);

export default{
	data(){
		return{
			typeList:[], 	//存放头部标题类型的数组
			photoList:[]	//存放图片的数组
		}
	},
	created(){
		this.getTypeList();
		this.getPhotoList(1);
	},
	mounted(){
		//当组件中的DOM结构被渲染好并放到页面当中后，会执行这个钩子函数
		//如果要操作元素了，最好在mounted里面，因为这时候的DOM元素是最新的
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods:{
		getTypeList(){
			this.$http.get('../../data/Photo/json/typeData.json').then(function(result){
				if(result.body.status === 0){
					Toast("获取类型成功！")
					result.body.message.unshift({ typeName:"全部",typeId:1 })
					this.typeList = result.body.message;
				}else{
					Toast("获取类型失败！")
				}
			})
		},
		getPhotoList(typeId){
			this.$http.get('../../data/Photo/json/img1.json').then(function(result){
				if(result.body.status === 0){
					Toast("获取图片成功！")
					this.photoList = result.body.message;
				}else{
					Toast("获取图片失败！")
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
*{
	touch-action: pan-y;
}
 img /*[lazy=loading]*/ { 
  width: 100%;
  height: 300px;
  margin: auto;
  vertical-align: middle;
}
ul{
	text-align: center;
	padding: 10px;

	margin: 0px;
}
li {
	list-style: none;
	background-color: darkgray;	
	margin-bottom: 10px;
	box-shadow:  0 0 9px gray;
	position: relative;
}

.info{
	background-color: rgba(0,0,0,0.3);
	position: absolute;
	bottom: 0;
	color: white;
}
.title-info{
	font-size: 16px;
	color: white;
}
.content-info{
	font-size: 14px;
	color: white;
	text-align: left;
	max-height: 84px;
}





</style>

