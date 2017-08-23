<template>
   <div class="hello">
      <img src="./img/loading.gif" v-show='loadingS'>
   </div>
</template>
<script>
export default {
   data () {
      return {
         msg: ''
      };
   },
   props: {
      loadingS: {
         default: false
      }
   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello {
   font-size: 20px;
}
</style>
