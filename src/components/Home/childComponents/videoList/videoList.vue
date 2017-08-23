<template>
   <div class="s_childVideoList">
      <!-- <img src="./img/newListImg.png"> -->
      <img :src="imgUrl(itemCts.smeta)">
      <div>{{itemCts.post_title}}</div>
      <div class="s_childVideoList_totle">
         <span>{{itemCts.show_author}}</span>
         <span>
            <span></span>
            <span>{{itemCts.post_like}}</span>
         </span>s
      </div>
      <!-- <videoCts></videoCts> -->
   </div>
</template>
<script>
// import videoCts from '../videoCts/videoCts';
import common from '@/common.js';
import { mapGetters } from 'vuex';
export default {
   data () {
      return {
      };
   },
   components: {
      // videoCts
   },
   // props: ['itemCts'],
   props: {
      itemCts: {
         default: ''
      }
   },
   computed: {
      ...mapGetters(['getTest'])
   },
   methods: {
      imgUrl(item) {
         return common.xCDN + item;
      }
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(videoList.less);
</style>
