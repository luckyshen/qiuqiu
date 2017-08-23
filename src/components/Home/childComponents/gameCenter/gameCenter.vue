<template>
   <div class="s_gameCenterBg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts'></partHeader>
      <img src="./img/gameList.png">
      <div class="s_gameCenterBg_news">
         <ul  class="s_gameCenterBg_news_nav">
            <li :class="{'s_gameCenterBg_news_hover': s_gameCenterBg_news_hover===index}" v-for="(site, index) in sites"  @mouseenter= 'choicegameCenterBgMenu(index)' >{{ site.name }}
              <span v-show="s_gameCenterBg_news_hover===index" class="bottom_wheit bounce-in" ></span>
              <!-- <span v-else class="bottom_wheit" ></span> -->
            </li>
         </ul>
         <div>2017线上公开预选赛明日正式开赛</div>
         <div>
            <partNewsList :colorType='colorType' :lineMiddle='lineMiddle'></partNewsList>
         </div>
      </div>
   </div>
</template>
<script>
import partHeader from '../partHeader/partHeader';
import partNewsList from '../partNewsList/partNewsList';
export default {
   data () {
      return {
         hImg: '1',
         hCts: '赛事中心',
         hMoreCts: '进入赛事中心',
         colorType: false,
         lineMiddle: true,
         s_gameCenterBg_news_hover: 0,
         sites: [
            { name: '线上公开赛' },
            { name: '职业联赛' },
            { name: '塔坦杯' },
            { name: '年终总决赛' }
         ]
      };
   },
   components: {
      partHeader,
      partNewsList
   },
   props: [],
   methods: {
      choicegameCenterBgMenu(index) {
         this.s_gameCenterBg_news_hover = index;
      }
   },
   mounted () {
   }
};

</script>
<style lang="less">
@import url(gameCenter.less);
@import url(../../../../common/css/mixin.less);
</style>
