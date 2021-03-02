<template>
<div id="navbox">
<li><router-link to="/">推荐</router-link></li>
<li><router-link to="/Focus">关注</router-link></li>
<li><router-link to="/Topic">话题</router-link></li>
<li><router-link to="/TogeRead">共读</router-link></li>
<li>书单</li>
<li>好文</li>
<li>广场</li><span class="iconfont icon-fangdajing"></span>
</div>
</template>

<script>/* 
import axios from "axios"; */

export default {
  name: "Nav",
  data: function() {
    return {
      navmsg: ["推荐", "关注", "话题", "共读", "书单", "好文", "广场"]
    };
  },
  /* created() {
    axios({
      url: "/navlist",
      method: "get"
    }).then(res => (this.navmsg = res.data));
  } */
};
</script>

<style scoped>
@import url("../assets/font/iconfont.css");
#navbox {
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.12rem;
}
li>a{
  color: #000;
}
li {
  list-style: none;
  margin: 0 0.11rem;
  font-size: 0.13rem;
  padding: 7px 0;
  color: #000;
}
li:hover{
  font-size: 0.18rem;
  font-weight: bold;
  border-bottom: 0.04rem solid #f5c266;
}
li>a:hover {
  font-size: 0.18rem;
  font-weight: bold;
}
span {
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #4f7965;
}
</style>
