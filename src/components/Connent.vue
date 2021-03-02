<template>
<div id="box">
    <div class="userBox" v-for="(user,index) in users" :key="index">
<p class="headP"><span class="userImg"><img :src="user.userImg"></span><span class="userName">{{user.userName}}</span><span class="level">{{user.level}}</span></p>
<p>{{user.msg}}</p>
<p class="talkP">{{user.desMsg}}</p>
<div class="bom-box"><img :src="user.bookImg" alt="">
<div right-box><p class="knowP">{{user.bookName}}</p><p class="desP">{{user.author}}</p></div></div>
<div class="footbox"><span>2小时前</span><img src="../assets/images/p_03.png" alt=""></div>
</div>

</div>
</template>

<script>
import axios from "axios"

export default {
  name: "Connent",
  data() {
    return {
      users: []
    };
  },
    created() {
        axios({
            url:"/users",
            method:"get" 
        }).then(res=>this.users=res.data)
    },
};
</script>

<style scoped>
#box {
  width: 100%;
}
.userBox {
  width: 91%;
  margin: 5px 0 10px 10px;
  background: #fff;
  padding: 5px;
}
.userBox p {
  margin-left: 10px;
}
.bom-box{
    width: 100%;
    background: #eee;
    display: flex;
}
.bom-box img{
    width: 30px;
    height: 50px;
    margin-left: 10px;
    margin-top: 5px;
}
.bom-box .knowP{
    font-size: 0.1rem;
    margin-left: 20px;
}
.bom-box .desP{
    font-size: 0.08rem;
}
.talkP{
    font-size: 0.08rem;
    color: #bbb;
}
.level{
    background: #537a67;
    color: #e5c66b;
    width: 0.55rem;
    height: 0.16rem;
    font-size: 0.09rem;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    line-height: 0.16rem;
}
.userImg{
    display: inline-block;
    width: 0.27rem;
    height: 0.27rem;
    border-radius: 50%;
    background: skyblue
}
.userImg img{
    width: 100%;
    height: 100%;
}
.headP{
    display: flex;
    align-items: center;
}
.userName{
    margin: 0 5px;
}
.footbox{
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footbox span{
    font-size: 0.08rem;
    color: #bbb;
}
.footbox img{
    width: 1.3rem;
    height: 0.18rem;
}
</style>
