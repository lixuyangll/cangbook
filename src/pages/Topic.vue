<template>
    <div id="box">
        <Nav></Nav>
        <div class="middlebox">
        <div class="topicbox" v-for="(toc,index) in topics" :key="index">
            <div class="hotTalk">热议</div>
            <p class="topic">{{toc.topic}}</p>
            <p class="dynamic">{{toc.dynamic}}</p>
            <p class="topicDec">{{toc.topicDec}}</p>
            <p class="discuss"><img src="" alt=""><span>{{toc.discuss}}</span></p>
        </div>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import MyFooter from '../components/MyFooter.vue'
import axios from 'axios';

export default {
    name:"Topic",
    components:{
        Nav,MyFooter
    },
    data() {
        return {
            topics:[]
        }
    },
    created() {
        axios({
            url:"/topics",
            method:"get"
        })
        .then(res=>this.topics = res.data)
    },
}
</script>

<style scoped>
#box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fefef9;
}
.middlebox{
    flex: 1;
    overflow: auto;
}
.topicbox{
    width: 86%;
    height: 1.85rem;
    background: skyblue;
    margin: 0 0 0.16rem 0.1rem;
    border-radius: 5px;
    padding: 0.15rem;
    position: relative;
    overflow: hidden;
}
.hotTalk{
    position: absolute;
    background: #c98061;
    left: -20px;
    top: 10px;
    transform: rotate(-45deg);
    width: 0.8rem;
    height: 0.2rem;
    font-size: 0.06rem;
    text-align: center;
    line-height: 0.2rem;
    color: #fff;
}
.topic{
    font-size: 0.19rem;
    color: #fff;
    font-weight: bold;
    
}
.dynamic{
    font-size: 0.14rem;
    color: #fff;
}
.topicDec{
    font-size: 0.13rem;
    color: #fff;
}
.discuss{
    font-size: 0.14rem;
    color: #fff;
    text-align: right
}
</style>

