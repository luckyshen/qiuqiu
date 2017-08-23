<template>
   <div class="s_avtivityBg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts' :joinImgShow='joinImgShow'></partHeader>
      <!-- <div class="s_avtivityBg_ImgList">
         <img :src="item.image" v-for='item in this.activityImg' >
      </div> -->
      <div @mouseenter="stopPlay()" @mouseleave="play()" class="s_avtivityBg_ImgList">
         <swiper :options="swiperOption" ref="mySwiper" class="s_avtivityBg_ImgList_swbg">
            <!-- <swiper-slide>
               <img src='../../../../assets/topBg2.png'>
            </swiper-slide>
            <swiper-slide>
               <img src='../../../../assets/topBg.png'>
            </swiper-slide> -->
            <swiper-slide  v-for="(item, index) in this.activityImg" :key="index" class="s_avtivityBg_ImgList_swbg_imgBg">
               <img class="s_avtivityBg_ImgList_swbg_swpImg" :src='imgUrl(item.image)' @click='banTo(item.title)' >
            </swiper-slide>
            <!-- <div class="swiper-pagination ownPagination" slot="pagination"></div> -->
         </swiper>
      </div>
   </div>
</template>
<script>
import { mapGetters } from 'vuex';
import common from '@/common.js';
import partHeader from '../partHeader/partHeader';
export default {
   data () {
      return {
         hImg: '4',
         hCts: '活动专区',
         hMoreCts: '',
         joinImgShow: false,
         activityImg: '',
         swiperOption: {
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            // direction : 'vertical',
            // effect: 'fade',
            fade: {
               crossFade: false
            },
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
            bulletClass: 'ownPoint',
            bulletActiveClass: 'ownPoint_active',
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
            autoplay: 3000
         }
      };
   },
   components: {
      partHeader
   },
   props: [],
   created() {
      let url = common.wURL + 'api/v1/home/act'; // post地址
      let sendData = {};
      this.$http.get(url, sendData)
         .then((res) => {
            this.activityImg = res.data.data.carousels;
            // console.log(res.data.data);
         });
   },
   mounted () {
   },
   computed: {
      swiper() {
         return this.$refs.mySwiper.swiper;
      },
      ...mapGetters(['getwCDN'])
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
      stopPlay() {
         this.swiper.stopAutoplay();
      },
      play() {
         this.swiper.startAutoplay();
      }
   }
};
</script>
<style lang="less">
@import url(activity.less);
@import url(../../../../common/css/mixin.less);
</style>
