<template>
<div id="box">
<p>热门话题 ></p>
<p v-for="(talk,index) in hotTalks" :key="index" class="talkP">{{talk.talkmsg}}</p>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Hot",
  data() {
    return {
      hotTalks: []
    };
  },
  created() {
    axios({
      url: "/topic",
      method: "get"
    }).then(res =>
      res.data.forEach(element => {
        if (element.id === res.data.length) {
          this.hotTalks.push(element);
        } else if (element.id === res.data.length - 1) {
          this.hotTalks.push(element);
        } else if (element.id === res.data.length - 2) {
          this.hotTalks.push(element);
        }
      })
    );
  }
};
</script>

<style scoped>
#box {
  width: 94%;
  height: 1.5rem;
  background: #fff;
  margin-left: 10px;
  margin-bottom: 0.13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#box p {
  margin-left: 10px;
}
.talkP {
  font-size: 0.12rem;
  transform: translateY(-10px);
}
</style>
