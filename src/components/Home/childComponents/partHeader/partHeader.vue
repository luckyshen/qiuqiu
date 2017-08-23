<template>
   <div>
      <header>
         <div>
            <div class="s_videoIcon" :class='classMap[this.hType]'></div>
            <p>{{this.hCts}}</p>
         </div>
         <div>
            <p>{{this.hMoreCts}}</p>
            <div class="s_videoIconJoin" v-show='this.joinImgShow'></div>
         </div>
      </header>
   </div>
</template>
<script>
export default {
   data () {
      return {
         hType: this.hImg
      };
   },
   components: {
   },
   // props: ['hImg', 'hCts', 'hMoreCts', 'joinImgShow'],
   props: {
      hImg: {
      },
      hCts: {
      },
      hMoreCts: {
      },
      joinImgShow: {
         default: true
      }
   },
   methods: {
   },
   created() {
      this.classMap = ['videoBg', 'gameBg', 'BPLBg', 'guideBg', 'activityBg', 'TVBg'];
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(partHeader.less);
@import url(../../../../common/css/mixin.less);
</style>
