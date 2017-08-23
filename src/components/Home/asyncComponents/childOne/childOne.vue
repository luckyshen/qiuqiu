<template>
   <div class="navOne">
      <p>{{pageOne}}</p>
      <div>{{this.$route.params.code}}</div>
      <div class="back" @click='$router.back()'>返回</div>
      <br>
      <router-link to="/cts2/childOne/childOneOne">666666</router-link>
      <router-view ></router-view>
      <p @click='showPage()'>show page</p>
      <pageCts ref='pShow'></pageCts>
   </div>
</template>
<script>
// import pageCts from '../pageCts/pageCts';
export default {
   data () {
      return {
         vuegConfig: {
            // options所有配置可以写在这个对象里，会覆盖全局的配置
            // disable: false, // 对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
            // forwardAnim: 'fadeInRight',
            // duration: '0.3',
            // backAnim: 'fadeInLeft'
         }
      };
   },
   components: {
      pageCts: resolve => { require(['../pageCts/pageCts'], resolve); }// 懒加载
   },
   props: {
      pageOne: {
         type: String,
         default: 1
      }
   },
   methods: {
      showPage () {
         this.$refs.pShow.showPage();
      }
   },
   computed: {

   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url(./childOne.less);
.hello {
   font-size: 20px;
}
</style>
