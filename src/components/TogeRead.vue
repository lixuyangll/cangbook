<template>
    <div id="box">
        <div class="togebox">
            <div class="imgbox"><img src="../assets/images/read_03.png" alt=""></div>
            <div class="togerightbox">
                <p class="readName"><span>共读</span><span>微习惯：简单到不可能失败的自我管理法则</span></p>
                <p class="bookDec">本书。。。</p>
                <p class="challenge"><span>31个共读挑战</span><span>2230人参与</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"TogeRead"
}
</script>

<style scoped>
#box{
    width: 100%;
    background: #fefef9; 
}
.togebox{
    width: 94%;
    height: 1.32rem;
    display: flex;
    margin-left: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #eee;
}
.imgbox{
    width: 35%;
    height: 100%;
    position: relative;
}
.imgbox>img{
    width: 0.76rem;
    height: 1.03rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
.togerightbox{
    width: 65%;
    height: 100%;
}
.readName{
    height: 0.15rem;
    display: flex;
    align-items: center;
}
.readName span:nth-child(1){
    font-size: 0.06rem;
    color: #6b8977;
    width: 0.31rem;
    height: 0.15rem;
    text-align: center;
    line-height: 0.15rem;
    border: 1px #6b8977 solid;
    box-sizing: border-box;
    margin-right: 10px;
    
}
.readName span:nth-child(2){
    width: 80%;
    font-size: 0.15rem;
    white-space: nowrap;/* 不换行 */
    text-overflow: ellipsis;/* 省略号 */
    overflow: hidden;
    line-height: 0.15rem;
}
.bookDec{
    font-size: 0.1rem;
    color: #6e6e6e;
    background: #f7f8f9;
    width: 95%;
}
.challenge{
    font-size: 0.1rem;
    color: #d1b08c;
    margin-top: 0.35rem;
}
.challenge span:nth-child(1){
    margin-right: 0.23rem;
}
</style>

