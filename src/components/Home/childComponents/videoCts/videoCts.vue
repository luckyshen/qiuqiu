<template>
   <div>
      <video width="352" height="264" controls autobuffer>
          <source :src="videoUrl" type='video/mp4'></source>
      </video>
   </div>
</template>
<script>
export default {
   data () {
      return {
         videoUrl: '@/components/Home/childComponents/videoCts/video/test.mp4'
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
@import url(videoCts.less);
@import url(../../../../common/css/mixin.less);
</style>
