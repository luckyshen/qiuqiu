<template>
   <div class="pageContent" v-show="pShow">
      <div @click='goBack()'>返回</div>
      <p>pageContent</p>
   </div>
</template>
<script>
export default {

   data () {
      return {
         pShow: false
      };
   },
   props: {

   },
   methods: {
      showPage () {
         this.pShow = !this.pShow;
      },
      goBack () {
         this.pShow = false;
      }
   },
   computed: {

   }

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url(./pageOne.less);
.hello {
   font-size: 20px;
}
</style>
