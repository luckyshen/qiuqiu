<template>
   <div class="s_partNewsListBg">
      <ul>
         <li v-for = 'item in this.guideList'>
            <div class="s_sBanNewsImg" v-show='getNewsInfoShow(item)&&getSbannerNewsInfo'>
               <!-- <img src="./img/topNewsImg.png"> -->
               <img :src="imgUrl(item.smeta_top)">
               <div>
                  <p>{{item.post_title}}</p>
                  <p>{{item.post_excerpt}}</p>
               </div>
            </div>
            <div class="s_guideTop" v-show='getNewsInfoShow(item)&&getGuideNewsInfo' >{{item.post_title}}</div>
            <!-- <span :class="{'colorType':colorType}" v-show='!getNewsInfoShow(item)' >【赛事】</span> -->
            <span class="s_partNewsListBg_line" :class="{'lineLong':lineLong,'lineMiddle':lineMiddle}" v-show='!getNewsInfoShow(item)'>{{item.post_title}}</span>
            <span :class="{'colorType':colorType}" v-show='!getNewsInfoShow(item)'>{{sub(item.post_date)}}</span>
         </li>
      </ul>
   </div>
</template>
<script>
import common from '@/common.js';
export default {
   data () {
      return {
      };
   },
   components: {
   },
   // props: ['colorType', 'lineLong', 'lineMiddle', 'guideList'],
   props: {
      colorType: {},
      lineLong: {},
      lineMiddle: {},
      guideList: {
         // type: Object,
         // default: null
      },
      getSbannerNewsInfo: {
         default: false
      },
      getGuideNewsInfo: {
         default: false
      }
   },
   computed: {
   },
   methods: {
      sub(item) {
         if (item) {
            return item.substring(5, 10);
         }
      },
      getNewsInfoShow(item) {
         /*eslint-disable*/
         localStorage.setItem("showId", item.istop);
         if (item.istop === '1') {
            return true;
         } else {
            return false;
         }
      },
      imgUrl(item) {
         return common.xCDN + item;
      }
   },
   created() {
      // console.log(this.guideList);
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(partNewsList.less);
@import url(../../../../common/css/mixin.less);
</style>
