<template>
    <div id="box">
    <Nav></Nav>
    <div class="middlebox">
    <div class="focusbox">
        <p class="promptP" v-show="show">您还没有关注的人哦</p>
        <p class="focusP" v-if="isShow"><span class="focImg"><img :src="useImg"></span><span class="focName">{{useName}}</span><span class="focused" @click="cancel">已关注</span></p>
    </div>
    <div class="interest">
        <div class="interText"><p>你可能感兴趣的人</p></div>
        <div class="interPerson">
            <div class="move">
            <div class="moveBox" v-for="(foc,index) in focus" :key="index">
              <div class="delete">X</div>
                <div class="circle"><img :src="foc.useImg" alt=""></div>
                <p class="userNamer">{{foc.useName}}</p>
                <p class="userLevel">{{foc.useLevel}}</p>
                <p class="addFocus" @click="focusFn(index)">+关注</p>
            </div>
            </div>
        </div>
    </div>
    <div class="rencomend">为您推荐10个藏友</div>
    <div class="userBox" v-for="(user,index) in users" :key="index">
<p class="headP"><span class="userImg"><img :src="user.userImg"></span><span class="userName">{{user.userName}}</span><span class="level">{{user.level}}</span></p>
<p>{{user.msg}}</p>
<p class="talkP">{{user.desMsg}}</p>
<div class="bom-box"><img :src="user.bookImg" alt="">
<div right-box><p class="knowP">{{user.bookName}}</p><p class="desP">{{user.author}}</p></div></div>
<div class="footbox"><span>2小时前</span><img src="../assets/images/p_03.png" alt=""></div>
</div></div>
<MyFooter></MyFooter>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import MyFooter from "../components/MyFooter.vue";
import axios from 'axios';

export default {
  name: "Focus",
  components: {
    Nav,
    MyFooter
  },
  data() {
    return {
      users: [
       /*  {
          userImg: "logo.png",
          userName: "夏天的太阳",
          level: "创作达人",
          msg: "这个知识点感觉没什么必要列出来，想一下就知道憋气自杀不可行",
          desMsg: "“所以一个人还是无法通过憋气来“杀死”自己。”",
          bookImg: "read_03.png",
          bookName: "少年维特之烦恼",
          author: "（德）歌德著；杨武能译"
        },
        {
          userImg: "logo.png",
          userName: "夏天的太阳",
          level: "创作达人",
          msg: "这个知识点感觉没什么必要列出来，想一下就知道憋气自杀不可行",
          desMsg: "“所以一个人还是无法通过憋气来“杀死”自己。”",
          bookImg: "read_03.png",
          bookName: "少年维特之烦恼",
          author: "（德）歌德著；杨武能译"
        },
        {
          userImg: "logo.png",
          userName: "夏天的太阳",
          level: "创作达人",
          msg: "这个知识点感觉没什么必要列出来，想一下就知道憋气自杀不可行",
          desMsg: "“所以一个人还是无法通过憋气来“杀死”自己。”",
          bookImg: "read_03.png",
          bookName: "少年维特之烦恼",
          author: "（德）歌德著；杨武能译"
        } */
      ],
      focus:[],
      isShow:false,
      show:true,
      useImg:"",
      useName:""
    };
  },
  methods:{
    focusFn(idx){
      localStorage.setItem("name",this.focus[idx].useName)
      localStorage.setItem("img",this.focus[idx].useImg)
      this.useImg = localStorage.getItem("img")
      this.useName = localStorage.getItem("name")
      this.isShow = true
      this.show = false
    },
    cancel(){
      this.isShow = false
      this.show = true
    }
  },
  created() {
    axios({
      url:"/focus",
      method:"get",
    })
    .then(res=>this.focus=res.data)

    axios({
      url:"/users",
      method:"get"
    })
    .then(res=>this.users=res.data)
  }
};
</script>

<style scoped>
#box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fdfef8;
}
.middlebox {
  flex: 1;
  overflow: auto;
}
.focusbox {
  width: 94%;
  height: 1.23rem;
  margin-left: 10px;
  background: #fff url(../assets/images/focus_03.png) no-repeat 50% 50%;
  background-size: 30% 30%;
  margin-bottom: 0.2rem;
  position: relative
}
.promptP {
  font-size: 0.11rem;
  color: #939393;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%,-50%)
}
.interest {
  width: 96%;
  height: 2.34rem;
  margin-left: 0.06rem;
}
.interText {
  width: 100%;
  height: 0.38rem;
  line-height: 0.38rem;
}
.interText > p {
  font-size: 0.21rem;
  text-indent: 5px;
}
.interPerson {
  width: 100%;
  height: 1.96rem;
  overflow: auto;
}
.focusP{
  width: 94%;
  height: 0.4rem;
  margin-left: 10px;
  line-height: 0.4rem;
  border-bottom: 1px dashed #bbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.focImg{
  display: inline-block;
  width: 0.38rem;
  height: 0.38rem;
  border-radius: 50%;
  background: skyblue;
}
.focImg>img{
  width: 100%;
  height: 100%;
}
.focName{
  margin-right: 0.5rem;
  width: 50%;
  height: 0.38rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.focused{
  width: 0.5rem;
  height: 0.28rem;
  border-radius: 20px;
  background: #eee;
  color: #bbb;
  font-size: 0.06rem;
  display: inline-block;
  text-align: center;
  line-height: 0.28rem
}
.move {
  width: 200%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.moveBox {
  height: 100%;
  width: 40%;
  background: #fff;
  margin-right: 0.12rem;
  position: relative;
}
.delete{
  position: absolute;
  right: 5px;
  top: 5px;
}
.circle {
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  background: skyblue;
  transform: translate(0.4rem, 0.23rem);
}
.circle>img{
  width: 100%;
  height: 100%;
}
.userNamer {
  margin-top: 0.38rem;
  font-size: 0.1rem;
  text-align: center;
}
.userLevel {
  background: #537a67;
  color: #e5c66b;
  width: 0.55rem;
  height: 0.16rem;
  font-size: 0.09rem;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.16rem;
  transform: translate(0.38rem, 0.05rem);
}
.addFocus {
  background: #537a67;
  color: #e5c66b;
  width: 0.75rem;
  height: 0.28rem;
  font-size: 0.11rem;
  display: inline-block;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.28rem;
  transform: translate(0.3rem, 0.01rem);
}
.rencomend {
  width: 94%;
  height: 0.27rem;
  background: #f9f6ef url(../assets/images/ren_03.png) no-repeat 5px 2px;
  background-size: 0.2rem 0.2rem;
  margin-left: 10px;
  text-indent: 0.3rem;
  line-height: 0.27rem;
  color: #537a67;
  font-size: 0.11rem;
  margin-top: 0.1rem;
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
.bom-box {
  width: 100%;
  background: #eee;
  display: flex;
}
.bom-box img {
  width: 30px;
  height: 50px;
  margin-left: 10px;
  margin-top: 5px;
}
.bom-box .knowP {
  font-size: 0.1rem;
  margin-left: 20px;
}
.bom-box .desP {
  font-size: 0.08rem;
}
.talkP {
  font-size: 0.08rem;
  color: #bbb;
}
.level {
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
.userImg {
  display: inline-block;
  width: 0.27rem;
  height: 0.27rem;
  border-radius: 50%;
  background: skyblue;
}
.userImg img {
  width: 100%;
  height: 100%;
}
.headP {
  display: flex;
  align-items: center;
}
.userName {
  margin: 0 5px;
}
.footbox {
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footbox span {
  font-size: 0.08rem;
  color: #bbb;
}
.footbox img {
  width: 1.3rem;
  height: 0.18rem;
}
</style>

