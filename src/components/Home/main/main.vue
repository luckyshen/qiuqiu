<template>
   <div class="s_main">
      <div @mouseenter="stopPlay()" @mouseleave="play()">
         <swiper :options="swiperOption" ref="mySwiper" class="s_swbg">
            <!-- <swiper-slide>
               <img src='../../../assets/topBg2.png'>
            </swiper-slide>
            <swiper-slide>
               <img src='../../../assets/topBg.png'>
            </swiper-slide> -->
            <swiper-slide  v-for="(item, index) in this.bgBanner" :key="index">
               <!-- <img :src='item.image' @click='banTo(item.title)'> -->
               <img :src='imgUrl(item.image)' @click='banTo(item.title)'>
            </swiper-slide>
            <div class="swiper-pagination ownPagination" slot="pagination"></div>
         </swiper>
      </div>
      <div class="s_headMenuBg">
         <div>
            <img src="./img/logo2.png">
            <ul class="s_menu">
               <li>
                  <div>官网首页</div>
                  <div>HOME</div>
               </li>
               <li>
                  <div>视频中心</div>
                  <div>VIDEO</div>
               </li>
               <li>
                  <div>攻略中心</div>
                  <div>RAIDERS</div>
               </li>
               <li>
                  <div>赛事中心</div>
                  <div>EVENTS</div>
               </li>
               <li>
                  <div>玩家互动</div>
                  <div>COMMUNITY</div>
               </li>
            </ul>
            <div class="s_login">
               <span>欢迎 </span>
               <span>登录</span>
            </div>
         </div>
      </div>
      <div class="s_mainCts">
         <sBanner></sBanner>
         <videoCenter :childVideoCenter= 'getVideoInfo'></videoCenter>
         <div class="s_gameCenterBg">
            <div class="s_gameCenterBg_gameCenter">
               <gameCenter></gameCenter>
            </div>
            <div class="s_gameCenterBg_BPL">
               <BPL></BPL>
            </div>
         </div>
         <ul class="s_videoList">
            <li><videoList></videoList></li>
            <li><videoList></videoList></li>
            <li><videoList></videoList></li>
            <li><videoList></videoList></li>
            <li><videoList></videoList></li>
            <li><videoList></videoList></li>
         </ul>
         <guide></guide>
         <activity></activity>
         <media></media>
      </div>
      <footer>
         <div>
            <div class="s_footer_notice">
               <p>温馨提示：</p>
               <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
            </div>
            <div class="s_footer_about">
               <p>互联网出版许可证：新出网证（沪）字008号   增值电信业务：沪B2-20050107   网络文化经营：沪网文【2011】0494-054</p>
               <p>上海巨人网络科技有限公司版权所有（上海市中辰路655号）</p>
               <p>联系我们</p>
            </div>
         </div>
         <router-link to="/admin" tag="div">admin</router-link>
         <router-view></router-view>
      </footer>
      <!-- <a href="javascript:scroll(0,0)" class="toTop" style="display: none;" @click='toTop()'><span id="toTopHover"  style="opacity: 0;"></span></a> -->
   </div>
</template>
<script>
import {
   swiper,
   swiperSlide
} from 'vue-awesome-swiper';
import common from '@/common.js';
import { mapGetters } from 'vuex';
import sBanner from '../childComponents/sBanner/sBanner';
import videoCenter from '../childComponents/videoCenter/videoCenter';
import gameCenter from '../childComponents/gameCenter/gameCenter';
import BPL from '../childComponents/BPL/BPL';
import videoList from '../childComponents/videoList/videoList';
import guide from '../childComponents/guide/guide';
import activity from '../childComponents/activity/activity';
import media from '../childComponents/media/media';
export default {
   data() {
      return {
         bgBanner: '',
         // cWidth: '',
         swiperOption: {
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            // direction : 'vertical',
            effect: 'fade',
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
            slidesPerView: 1,
            bulletClass: 'ownPoint',
            bulletActiveClass: 'ownPoint_active'
            // autoplay: 3000
               // spaceBetween: 30,
               // loop: true,
               // loopAdditionalSlides: 2
               // if you need use plugins in the swiper, you can config in here like this
               // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
               // debugger: true,
               // swiper callbacks
               // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
               // onTransitionStart (swiper) {
               //    console.log(swiper);
               // }
               // more Swiper configs and callbacks...
               // ...
         }
      };
   },
   components: {
      swiper,
      swiperSlide,
      sBanner,
      videoCenter,
      gameCenter,
      BPL,
      videoList,
      guide,
      activity,
      media
   },
   created() {
      this.$store.dispatch('wCNDaddress');
      this.$store.dispatch('videoAxios');
      this.$store.dispatch('videoChoiceAxios');
      this.$store.dispatch('newsAxios');
      this.$store.dispatch('newsChoiceAxios');
      this.$store.dispatch('guideAxios');
      this.$store.dispatch('guideChoiceAxios');
      let url = common.wURL + 'api/v1/home/background';  // 线上接口地址
      // let url = common.wURL + 'api/v1/home/test';
      let sendData = {};
      this.$http.get(url, sendData)
         .then((res) => {
            this.bgBanner = res.data.data.carousels;
            // console.log(this.bgBanner);
         });
      // let url = common.wURL + 'api/v1/config/tjbaidu';  // 线上接口地址
      // // let url = common.wURL + 'api/v1/home/test';
      // let sendData = {};
      // this.$http.get(url, sendData)
      //    .then((res) => {
      //       this.bgBanner = res.data.data.carousels;
      //       // console.log(this.bgBanner);
      //    });
   },
   mounted() {
      let hm = document.createElement('script');
      hm.src = '//hm.baidu.com/hm.js?95d909a7103f943a56124edd39930d1f';
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
      // console.log(this.cWidth);
      // if (this.cWidth < 1024) {
      //    window.location.href = '/#/cts1';
      // }
      // document.addEventListener('DOMContentLoaded', function() {
      //    var html = document.documentElement;
      //    var windowWidth = html.clientWidth;
      //    console.log(windowWidth);
      //    html.style.fontSize = windowWidth / 7.5 + 'px';
      // }, false);
      // this.swiper.paginationBulletRender(swiper, 3);
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 1000, false);
   },
   computed: {
      swiper() {
         return this.$refs.mySwiper.swiper;
      },
      ...mapGetters(['getVideoInfo', 'getwCDN'])
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import url(./s_main.less);
@import url(../../../common/css/mixin.less);
/*swiper点样式*/
.ownPagination{
   width: 1200px;
   top: 430px;
}
.ownPoint{
   width: 20px;
   height: 20px;
   display:inline-block;
   border-radius:100%;
   background:#000;
   opacity:.2;
   margin-right: 15px;
   cursor: pointer;
}
.ownPoint_active{
   background:#041969;
   opacity:1;
}
</style>
