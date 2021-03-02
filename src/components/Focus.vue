<template>
    <div id="box">
    <div class="focusbox">
        <p class="promptP">您还没有关注的人哦</p>
    </div>
    <div class="interest">
        <div class="interText"><p>你可能感兴趣的人</p></div>
        <div class="interPerson">
            <div class="move">
            <div class="moveBox">
                <div class="circle"></div>
                <p class="userNamer">幼儿园的小班长</p>
                <p class="userLevel">藏书达人</p>
                <p class="addFocus">+关注</p>
            </div>
            <div class="moveBox">
                <div class="circle"></div>
                <p class="userNamer">幼儿园的小班长</p>
                <p class="userLevel">藏书达人</p>
                <p class="addFocus">+关注</p>
            </div>
            <div class="moveBox">
                <div class="circle"></div>
                <p class="userNamer">幼儿园的小班长</p>
                <p class="userLevel">藏书达人</p>
                <p class="addFocus">+关注</p>
            </div>
            <div class="moveBox">
                <div class="circle"></div>
                <p class="userNamer">幼儿园的小班长</p>
                <p class="userLevel">藏书达人</p>
                <p class="addFocus">+关注</p>
            </div>
            <div class="moveBox">
                <div class="circle"></div>
                <p class="userNamer">幼儿园的小班长</p>
                <p class="userLevel">藏书达人</p>
                <p class="addFocus">+关注</p>
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
</div>
    </div>
</template>

<script>
export default {
  name: "Focus",
  data() {
    return {
      users: [
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
        }
      ]
    };
  }
};
</script>

<style scoped>
#box {
  width: 100%;
  background: #fdfef8;
}
.focusbox {
  width: 94%;
  height: 1.23rem;
  margin-left: 10px;
  background: #fff url(../assets/images/focus_03.png) no-repeat 50% 50%;
  background-size: 30% 30%;
  margin-bottom: 0.2rem;
}
.promptP {
  font-size: 0.11rem;
  color: #939393;
  transform: translate(1.21rem, 0.85rem);
}
.interest {
  width: 96%;
  height: 2.34rem;
  margin-left: 0.06rem;
  background: yellow;
}
.interText {
  width: 100%;
  height: 0.38rem;
  line-height: 0.38rem;
  background: skyblue;
}
.interText > p {
  font-size: 0.21rem;
  text-indent: 5px;
}
.interPerson {
  width: 100%;
  height: 1.96rem;
  background: gray;
  overflow: auto;
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
  background: orange;
  margin-right: 0.12rem;
}
.circle {
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  background: skyblue;
  transform: translate(0.4rem, 0.23rem);
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

