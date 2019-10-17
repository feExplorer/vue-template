<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.$ajax.post("http://api.xuege100.com/tl_index/analys/single_analys", {
      article_content: "veniam dolor occaecat"
    }).then(res=>{
      console.log("home")
    });
  }
};
</script>
