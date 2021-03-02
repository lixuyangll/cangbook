<template>
<div id="box">
<p><span>{{msg}}</span><span>{{msg1}}</span></p>
<div class="bom-box"><img :src="imgUrl" alt="">
<div right-box><p class="knowP">{{knowmsg}}</p><p class="desP">{{descripmsg}}</p><p class="startReadP"><span class="startRead">{{startRead}}</span></p></div></div>
</div>
</template>

<script>
import img from "@/assets/images/read_03.png"
export default {
  name: "ReadBook",
  data() {
    return {
      msg: "每周共读一本书",
      msg1: "查看更多 >",
      knowmsg:"很冷很冷的冷门知识（书立方十）",
      startRead:"开始共读",
      descripmsg:"本书汇集了那些随时都会从我们身边冒出来的冷门知识，以点带面，包罗万象",
      imgUrl: img
    };
  }
};
</script>

<style scoped>
#box {
  width: 94%;
  height: 2.06rem;
  background: #fff;
  margin: 0.13rem 0 0.13rem 10px;
}
#box p span:nth-of-type(1) {
  font-size: 0.16rem;
}
#box p span:nth-of-type(2) {
  font-size: 0.15rem;
  color: #949494;
}
#box>p {
  width: 94%;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  text-align: center;
  line-height: 0.45rem;
  border-bottom: #efefef 1px solid;
  box-sizing: border-box;
}
#box .bom-box {
  width: 100%;
  height: 1.45rem;
  display: flex;
}
#box img {
  width: 30%;
  height: 90%;
  margin-right: 10px;
  margin-left: 10px;
}
#box .bom-box .right-box {
  width: 70%;
  height: 90%;
}
.right-box{
    margin-left: 5px;
}
.knowP{
    font-size: 0.14rem;
}
.desP{
    font-size: 0.13rem;
    color: #a6a6a6;
}
.startReadP{
    display: flex;
    justify-content: flex-end;
}
.startRead{
    font-size: 0.1rem;
    width: 0.7rem;
    height: 0.25rem;
    background: #d77d5b;
    border-radius: 0.11rem;
    display: block;
    text-align: center;
    line-height: 0.25rem;
    margin-right: 5px;
    color: #fff;
}
</style>
