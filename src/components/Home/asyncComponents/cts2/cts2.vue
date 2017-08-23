<template>
   <div class="tt" v-show="showCts2">
      <p>{{this.$route.params.two}}</p>
      <div>这是组件cts2</div>
      <router-link :to="{ name: 'childOne', params: { code: '子组件a传参' }}">cts2子组件a</router-link>
      <!-- <router-link to="/cts2/childOne">cts2子组件a1</router-link> -->
      <router-link to="/cts2/childTwo">cts2子组件b</router-link>
      <router-view :pageOne='pageOne'></router-view>
      <loading :loadingS='loadingS'></loading>
      <button @click='fAjax()'>fakeAiax</button>
   </div>
</template>
<script>
import loading from '../loading/loading';
export default {
   data () {
      return {
         msg: '',
         pageOne: '子组件a内容',
         inputCts: '',
         loadingS: '',
         showCts2: true
      };
   },
   components: {
      loading
   },
   props: ['two'],
   methods: {
      fAjax () { // 模拟ajax加载
         this.loadingS = true;
         setTimeout(() => {
            this.loadingS = false;
         }, 3000);
      },
      showDtl () {
         this.showCts2 = !this.showCts2;
      }
   },
   mounted () {
   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.tt {
   font-size: 0.36rem;
}
</style>
