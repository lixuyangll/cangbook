<template>
<div id="footbox">
<div class="footnav">
    <i class="iconfont icon-firstpage1"></i>
    <span>首页</span>
</div>
<div class="footnav">
    <i class="iconfont icon-shu1"></i>
    <span>发现</span>
</div>
<van-button icon="plus" type="primary" :round="isCircle" @click="addMsg" color="#507b67"/>
<van-action-sheet v-model="isShow" title="话题">
  <div class="content">
     <van-cell-group>
  <van-cell title="话题"/><input type="text" v-model="talkmsg">
  <van-cell title="我的观点"/>
  <textarea name="" id="" cols="30" rows="5" placeholder="请输入描述信息"  v-model="desmsg"></textarea>
</van-cell-group>
  </div>
  <van-button class="btn1" plain type="primary" @click="addTopic">添加话题</van-button>
<van-button class="btn2" plain type="info" @click="cancel">取消</van-button>
</van-action-sheet>
<div class="footnav">
    <i class="iconfont icon-dushulishi"></i>
    <span>读书</span>
</div>
<div class="footnav">
    <i class="iconfont icon-wode"></i>
    <span>我的</span>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
import axios from "axios"
Vue.use(Toast);
export default {
  name: "MyFooter",
  data: function() {
    return {
      /*  msgs:[
                "首页","发现","读书","我的"
            ] */
      isCircle: true,
      isShow: false,
      talkmsg: "",
      desmsg: ""
    };
  },
  methods: {
    addMsg() {
      this.isShow = true;
    },
    cancel() {
      this.isShow = false;
      this.talkmsg = "";
      this.desmsg = "";
    },
    addTopic() {
      if (this.talkmsg && this.desmsg) {
        //添加话题端口
        axios({
        url:"/topic",
        method:"post",
        data:`talkmsg=${this.talkmsg}&desmsg=${this.desmsg}`
    })
        .then(res => console.log("this.data",res.data));
        Toast.success("添加成功");
        this.isShow = false;
        this.talkmsg = "";
        this.desmsg = "";
        location.reload()
      } else {
       Toast.fail("请输入完整信息");
      }
    }
  }
};
</script>

<style scoped>
@import url("../assets/font1/iconfont.css");
#footbox {
  width: 100%;
  height: 0.58rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footnav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footnav span {
  font-size: 0.1rem;
}
.footnav:hover {
  color: #4c7662;
}
.content {
  padding: 16px 16px 160px;
}
.btn1 {
  transform: translate(100px, -40px);
}
.btn2 {
  transform: translate(130px, -40px);
}
</style>
