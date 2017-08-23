<template>
   <div class="s_mediaBg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts' :joinImgShow='joinImgShow'></partHeader>
      <!-- <select>
         <option>合作媒体1</option>
         <option>合作媒体2</option>
         <option>合作媒体3</option>
      </select> -->
      <div class="s_mediaBg_ImgList">
         <img :src="imgUrl(item.image)" v-for='item in this.mediaImg'>
         <!-- <img src="./img/TVlist.png">
         <img src="./img/TVlist.png">
         <img src="./img/TVlist.png">
         <img src="./img/TVlist.png">
         <img src="./img/TVlist.png"> -->
      </div>
   </div>
</template>
<script>
import common from '@/common.js';
import { mapGetters } from 'vuex';
import partHeader from '../partHeader/partHeader';
export default {
   data () {
      return {
         hImg: '5',
         hCts: '媒体合作',
         hMoreCts: '',
         joinImgShow: false,
         mediaImg: ''
      };
   },
   components: {
      partHeader
   },
   props: [],
   created() {
      let url = common.wURL + 'api/v1/home/media'; // post地址
      let sendData = {};
      this.$http.get(url, sendData)
         .then((res) => {
            this.mediaImg = res.data.data.carousels;
            // console.log(res.data.data);
         });
   },
   computed: {
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
      }
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(media.less);
@import url(../../../../common/css/mixin.less);
</style>
