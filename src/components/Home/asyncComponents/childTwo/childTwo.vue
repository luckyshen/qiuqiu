<template>
   <div class="hello">
      <p>cts2子组件b内容</p>
      <div class="back" @click='$router.back()'>返回</div>
   </div>
</template>
<script>
export default {
   data () {
      return {
         vuegConfig: {
         }
      };
   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello {
   font-size: 20px;
}

.back {
   width: 2rem;
   height: 1rem;
   line-height: 1rem;
   color: blue;
   font-size: 0.4rem;
}
</style>
