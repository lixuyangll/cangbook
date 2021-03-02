<template>
    <div id="box">
        <div class="topicbox">
            <div class="hotTalk">热议</div>
            <p class="topic">你想成为什么样的人</p>
            <p class="dynamic">260条动态</p>
            <p class="topicDec">哪本书中的哪个角色是你的榜样，你想成为什么样的人？</p>
            <p class="discuss"><img src="" alt=""><span>257人火热讨论中</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Topic",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
#box{
    width: 100%;
    background: #fefef9;
}
.topicbox{
    width: 86%;
    height: 1.85rem;
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

