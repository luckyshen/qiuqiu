<template>
   <div class="s_sbannerBg">
      <div @mouseenter="sBanStopPlay()" @mouseleave="sBanPlay()" class="s_sbannerWrap" >
      <!-- <div class="s_sbannerWrap" > -->
         <swiper :options="swiperOption" ref="mySwiper" class="s_sbanner">
            <swiper-slide  v-for="(item, index) in this.adBanner" :key="index">
               <img :src='imgUrl(item.image)' @click='banTo(item.title)'>
               <div class="s_notice">【球球大作战】线上公开赛正式开赛啦33！</div>
            </swiper-slide>
            <div class="swiper-pagination s_sBannerPoint_bg" slot="pagination"></div>
            <!-- <div class="s_notice">【球球大作战】线上公开赛正式开赛啦！</div> -->
         </swiper>
      </div>
      <div class="s_sBanNewsBg">
         <div>
            <div class="s_sBanNewsMenuBg">
              <div  class="s_sBanNewsMenuBg_menu " :class="{'s_sBanNewsMenuBg_menu_click': s_sBanNewsMenuBg_menu_click === item.term_id}" v-for= 'item in getNewsInfo.cats' @mouseenter="choiceMenu(item.term_id)">{{item.name}}
                <span v-show="s_sBanNewsMenuBg_menu_click === item.term_id" class="bottom_wheit bounce-in" ></span>
                <!-- <span v-else class="bottom_wheit" ></span> -->
              </div>
               <div class="s_sBanNewsMenuBg_more">
                  <img src="./img/Jt.png">
                  <span>更多</span>
               </div>
            </div>
            <!-- <div class="s_sBanNewsImg">
               <img src="./img/topNewsImg.png">
               <div>
                  <p>{{}}</p>
                  <p>误入虫洞的宇宙飞船等你解救误入虫洞的宇宙飞船等洞的宇宙飞船等你解救洞的宇宙飞船等你解救洞的宇宙飞船等你解救你解救</p>
               </div>
            </div> -->
            <div class="s_sBanNewsUl">
               <!-- <div class="s_sBanNewsImg">
                  <img src="./img/topNewsImg.png">
                  <div>
                     <p>{{}}</p>
                     <p>误入虫洞的宇宙飞船等你解救误入虫洞的宇宙飞船等洞的宇宙飞船等你解救洞的宇宙飞船等你解救洞的宇宙飞船等你解救你解救</p>
                  </div>
               </div> -->
               <partNewsList :colorType='colorType' :guideList='getNewsChoiceInfo.alist' :getSbannerNewsInfo = 'true'></partNewsList>
            </div>
         </div>
         <div>
            <img src="./img/sBanRightNav11.png">
            <img src="./img/sBanRightNav22.png">
            <img src="./img/sBanRightNav33.png">
         </div>
      </div>
   </div>
</template>
<script>
import {
   swiper,
   swiperSlide
} from 'vue-awesome-swiper';
import common from '@/common.js';
import { mapGetters } from 'vuex';
import partNewsList from '../partNewsList/partNewsList';
export default {
   data () {
      return {
         colorType: true,
         adBanner: '',
         s_sBanNewsMenuBg_menu_click: 23,
         swiperOption: {
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            // direction : 'vertical',
            // effect: 'coverflow',
            preventClicks: true,
            grabCursor: true,
            setWrapperSize: true,
            // autoHeight: true,
            // paginationType:"bullets",
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            // scrollbar:'.swiper-scrollbar',
            mousewheelControl: false,
            observeParents: true,
            slidesPerView: 1
            // bulletClass: 's_sBannerPoint', // 设置点样式的class名
            // bulletActiveClass: 's_sBannerPoint_active' // 设置点样式的class名
         }
      };
   },
   components: {
      swiper,
      swiperSlide,
      partNewsList
   },
   props: [],
   computed: {
      swiper() {
         return this.$refs.mySwiper.swiper;
      },
      ...mapGetters(['getNewsInfo', 'getNewsChoiceInfo', 'getwCDN'])

   },
   methods: {
      imgUrl(item) {
         let http = item.substring(0, 4);
         if (http === 'http') {
            return item;
         } else {
            return this.getwCDN._cdn_url + item; // 图片地址拼接
         }
      },
      banTo(index) {
         console.log(index);
         /*eslint-disable*/
         // if(index === 0){
         //    this.$refs.ctsDetail.showDtl();
         // }
         // if(index === 1){
         //    location.href = 'https://www.baidu.com';
         // }
      },
      sBanStopPlay() {
         this.swiper.stopAutoplay();
      },
      sBanPlay() {
         this.swiper.startAutoplay();
      },
      choiceVideo_hover(index) {
         this.s_videoCenter_navBg_hover = index;
      },
      choiceMenu(tid) {
         this.s_sBanNewsMenuBg_menu_click = tid;
         this.$store.dispatch('newsChoiceAxios', tid);
      }

   },
   created() {
      let url = common.wURL + 'api/v1/home/banner';
      // let url = common.wURL + 'api/v1/home/test';
      let sendData = {};
      this.$http.get(url, sendData)
         .then((res) => {
            this.adBanner = res.data.data.carousels;
         });
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(s_sBanner.less);
@import url(../../../../common/css/mixin.less);
.s_sBannerPoint_bg {
   text-align: right;
   padding-right: 8px;
}
.s_sBannerPoint{
   width: 12px;
   height: 12px;
   display:inline-block;
   border-radius:100%;
   background:#40479a;
   opacity:.2;
   padding-right: 8px;
   cursor: pointer;
   margin-right: 8px;
}
.s_sBannerPoint_active{
   background:#322758;
   opacity:1;
}
</style>
