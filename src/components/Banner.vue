<template>
<div id="box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(bannerImgUrl,index) in bannerImgUrls" :key="index"><img :src="bannerImgUrl" ></van-swipe-item>
</van-swipe>
</div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import axios from "axios"

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    name: 'Banner',
    data:function(){
        return{
            bannerImgUrls:[]
        }
    },
    created() {
        axios({
            url:"/bannerImgUrls",
            method:"get" 
        }).then(res=>this.bannerImgUrls=res.data)
    },
}
</script>

<style scoped>

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 150px;
  }
#box{
    width: 100%;
    height: 1.23rem;
    margin-bottom:40px;
}
#box img{
    width: 94%;
    height: 100%;
}
</style>
