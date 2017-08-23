<template>
   <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
      <Row type="flex">
         <i-col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto">
               <div class="layout-logo-left"></div>
               <Menu-item name="1">
                  <Icon type="ios-navigate" :size="iconSize"></Icon>
                  <span class="layout-text">选项 1</span>
               </Menu-item>
               <Menu-item name="2">
                  <Icon type="ios-keypad" :size="iconSize"></Icon>
                  <span class="layout-text">选项 2</span>
               </Menu-item>
               <Menu-item name="3">
                  <Icon type="ios-analytics" :size="iconSize"></Icon>
                  <span class="layout-text">选项 3</span>
               </Menu-item>
            </Menu>
         </i-col>
         <i-col :span="spanRight">
            <div class="layout-header">
               <i-button type="text" @click="toggleClick">
                  <Icon type="navicon" size="32"></Icon>
               </i-button>
            </div>
            <div class="layout-breadcrumb">
               <Breadcrumb>
                  <Breadcrumb-item href="#">首页</Breadcrumb-item>
                  <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                  <Breadcrumb-item>某应用</Breadcrumb-item>
               </Breadcrumb>
            </div>
            <div class="layout-content">
               <div class="layout-content-main">内容区域</div>
            </div>
            <div class="layout-copy">
               2011-2016 &copy; TalkingData
            </div>
         </i-col>
      </Row>
      <Row type='flex' class="code-row-bg" align="bottom">
         <i-col :xs='4' :sm='6' :md='6' :lg='8' style='background:#ccc;font-size:10px;height:60px;'>8</i-col>
         <i-col :xs='16' :sm='12' :md='12' :lg='8' style='background:#222;height:40px;'>16</i-col>
         <i-col :xs='4' :sm='6' :md='6' :lg='8' style='background:#666;height:40px;'>16</i-col>
      </Row>
      <input type="file">上传</input>
   </div>
</template>
<script>
export default {
   data () {
      return {
         spanLeft: 5,
         spanRight: 19,
         imgSrc: '',
         vuegConfig: {
            // options所有配置可以写在这个对象里，会覆盖全局的配置
            // disable: false, // 对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
            // forwardAnim: 'fadeInRight',
            // duration: '0.3',
            // backAnim: 'fadeInLeft'
         }
      };
   },
   created () {
      // this.$Loading.start();
      // let url = 'http://www.superpopgames.com/apiend/news/index';
      // let sendData = { id: 20 };
      // this.$http.get(url, { params: sendData })
      //    .then((res) => {
      //       console.log(res.data);
      //       this.imgSrc = res.data.data.banner;
      //       console.log(this.imgSrc);
      // this.$Loading.finish();
      // });
   },
   components: {},
   props: {},
   methods: {
      toggleClick () {
         if (this.spanLeft === 5) {
            this.spanLeft = 2;
            this.spanRight = 22;
         } else {
            this.spanLeft = 5;
            this.spanRight = 19;
         }
      }
   },
   mounted () {},
   computed: {
      iconSize () {
         return this.spanLeft === 5 ? 14 : 24;
      }
   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url(./admin.less);
</style>
