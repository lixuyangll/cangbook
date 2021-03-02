<template>
  <div id="app">
    <Nav></Nav>
    <div class="middlebox">
      <Banner></Banner>
      <ReadBook></ReadBook>
      <Hot></Hot>
      <Connent></Connent>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Connent from "../components/Connent.vue";
import MyFooter from "../components/MyFooter.vue";
import Banner from "../components/Banner.vue";
import ReadBook from "../components/ReadBook.vue";
import Hot from "../components/Hot.vue";

export default {
  name: "Index",
  components: {
    Nav,
    Connent,
    MyFooter,
    Banner,
    ReadBook,
    Hot
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.middlebox {
  flex: 1;
  overflow: auto;
}
</style>
