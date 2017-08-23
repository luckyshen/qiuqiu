<template>
   <div class="s_videoCenterBg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts'></partHeader>
      <div class="s_videoCenter">
         <div class="s_videoCenter_hot">
            <div>今日热门推荐</div>
            <ul>
               <li v-for='item in getRecommendVideoInfo.recommend' >
               <!-- <li v-for='item in videoRecommend' > -->
                  <!-- <img :src="item.smeta"> -->
                  <img :src="imgUrl(item.smeta)">
                  <div>{{item.post_title}}</div>
               </li>
            </ul>
         </div>
         <div class="s_videoCenter_navBg">
            <ul class="s_videoCenter_navBg_nav">
               <li :class="{'s_videoCenter_navBg_hover': s_videoCenter_navBg_hover === item.term_id}" v-for='item in getVideoInfo.cats' @mouseenter= 'choiceVideoMenu(item.term_id)' >
                  {{item.name}}
                  <span v-show="s_videoCenter_navBg_hover === item.term_id" class="bottom_wheit bounce-in" ></span>
                  <!-- <span class="bottom_wheit " ></span> -->
               </li>
            </ul>
            <ul class="s_videoCenter_navBg_list">
               <li  v-for='item in getVideoChoiceInfo.alist' v-if='getVideoChoiceInfo.alist'>
                  <videoList :itemCts='item'></videoList>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
<script>
import common from '@/common.js';
import { mapGetters } from 'vuex';
import videoList from '../videoList/videoList';
import partHeader from '../partHeader/partHeader';
export default {
   data() {
      return {
         hImg: '0',
         hCts: '视频中心',
         hMoreCts: '进入视频中心',
         s_videoCenter_navBg_hover: 8,
         latest: ''
         // videoCenterMenu: this.childVideoCenter.cats
      };
   },
   components: {
      videoList,
      partHeader
   },
   // props: {
   //    childVideoCenter: {}
   // },
   props: ['childVideoCenter'],
   computed: {
      ...mapGetters(['getRecommendVideoInfo', 'getVideoInfo', 'getVideoChoiceInfo']),
      videoRecommend() {
         return this.getRecommendVideoInfo.recommend.splice(6);
      }
   },
   methods: {
      choiceVideoMenu(tid) {
         this.s_videoCenter_navBg_hover = tid;
         this.$store.dispatch('videoChoiceAxios', tid);
      },
      imgUrl(item) {
         return common.xCDN + item;
      }
   },
   created() {
      // let url = 'http://192.168.96.237/apiend/news/index.html';//get
      // let url = 'http://192.168.96.118:11100/Api/Gplat/AjaxGetVideoIndexBlock'; // get
      // this.$http.get(url)
      //    .then((res) => {
      //       console.log(res.data.data);
      //       this.videoCenterMenu = res.data.data.cats;
      //    })
      //    .catch((err) => {
      //       console.log(err);
      //    });
   },
   mounted() {
   }
};
</script>
<style lang="less">
@import url(videoCenter.less);
@import url(../../../../common/css/mixin.less);
</style>
