<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {apitest} from '@/api/test.js'
export default {
  // beforeRouteEnter(to, from, next) {
  //   apitest().then(res => {
  //     console.log(res)
  //     next(vm => {
  //       // vm.info = res.data;
  //       // vm.loadFinish = true;
  //     });
      
  //   }).catch(e=>{
  //     console.log(e)
  //   });
    
  // },
  mounted() {
      apitest().then(res => {})
  }
};
</script>
