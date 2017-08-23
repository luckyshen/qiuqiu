<template>
   <div>
      <ul class="newsList">
         <li v-for='(item,index) in news'>
            <router-link :to="{ name: 'newsDetail', params : { id:index } }" tag="div">新闻{{index}}</router-link>
         </li>
      </ul>
      <!-- <ul>
         <li v-for='(item,index) in news'>
            <router-link :to="{ path: '/newsList/query', query : {id:index} }" tag="div">新闻:{{index}}</router-link>
         </li>
      </ul> -->
      <router-view></router-view>
   </div>
</template>
<script>
export default {
   data () {
      return {
         news: ['1', '2', '3']
      };
   },
   components: {
   },
   props: [],
   methods: {
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(newsList.less);
@import url(../../../../common/css/mixin.less);
</style>
