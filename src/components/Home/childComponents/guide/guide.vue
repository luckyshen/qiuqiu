<template>
   <div class="s_guideBg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts'></partHeader>
      <div>
         <div>
            <img :src="imgUrl(item.slide_bg)" v-for='item in getGuideInfo.ad'>
            <!-- <img :src="item.slide_bg" v-for='item in getGuideInfo.ad'> -->
         </div>
         <div class="s_guideBg_news">
            <ul class="s_guideBg_news_nav">
               <li :class="{'s_guideBg_news_hover': s_guideBg_news_hover === item.term_id}" v-for="item in getGuideInfo.cats " @mouseenter= 'choiceGuideMenu(item.term_id)'>
                  {{item.name}}
                  <span v-show="s_guideBg_news_hover === item.term_id" class="bottom_wheit bounce-in" ></span>
                  <!-- <span class="bottom_wheit " ></span> -->
               </li>
            </ul>
            <!-- <div>2017线上公开预选赛明日正式开赛</div> -->
            <div>
               <partNewsList :lineLong='lineLong' :guide-list='getGuideChoiceInfo.alist' :getGuideNewsInfo = 'true'></partNewsList>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import common from '@/common.js';
import { mapGetters } from 'vuex';
import partHeader from '../partHeader/partHeader';
import partNewsList from '../partNewsList/partNewsList';
export default {
   data () {
      return {
         hImg: '3',
         hCts: '攻略中心',
         hMoreCts: '进入攻略中心',
         s_guideBg_news_hover: '9',
         lineLong: true
         // guideList: ''
      };
   },
   components: {
      partHeader,
      partNewsList
   },
   props: [],
   computed: {
      guideListTop() {
         return this.guideList.latest.filter((el) => {
            el.istop === 1;
         });
      },
      ...mapGetters(['getGuideInfo', 'getGuideChoiceInfo'])
   },
   methods: {
      choiceGuideMenu(tid) {
         // console.log(tid);
         this.s_guideBg_news_hover = tid;
         this.$store.dispatch('guideChoiceAxios', tid);
      },
      imgUrl(item) {
         return common.xCDN + item;
      }
   },
   created() {
   },
   mounted () {
   }
};
</script>
<style lang="less" scoped>
@import url(guide.less);
@import url(../../../../common/css/mixin.less);
</style>
