<template>
   <div id="app">
      <!-- 头部导航 -->
      <header class="header">
         <el-row>
            <el-col :span="24">
               <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                  <el-menu-item index="1">menu1</el-menu-item>
                  <el-menu-item index="2">menu2</el-menu-item>
                  <el-menu-item index="3">menu3</el-menu-item>
                  <el-menu-item index="4">menu4</el-menu-item>
                  <el-menu-item index="5">menu5</el-menu-item>
               </el-menu>
            </el-col>
         </el-row>
      </header>
      <div style="position: relative;height: 60px;width: 100%;"></div>
      <main>
         <!-- 左侧导航 -->
         <div class="main-left">
            <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
               <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
               <el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
            </el-menu>
         </div>
         <!-- 右侧主内容区 -->
         <div class="main-right">
         </div>
      </main>
   </div>
</template>
<script>
export default {
   data() {
      return {
         active: true
      };
   },
   created() {
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
   mounted() {},
   props: {},
   components: {},
   methods: {},
   computed: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url(./adminELE.less);
</style>
