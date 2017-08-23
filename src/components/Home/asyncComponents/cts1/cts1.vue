<template>
   <div class="edit">
      <div @click="addItem()">add数组</div>
      <div @click="addCount()">add数字</div>
      <ul>
         <li>{{getList}}</li>
         <li>{{getCount}}</li>
         <li>{{getTest}}</li>
      </ul>
      <div @click="$router.back()">返回</div>
   </div>
</template>
<script>
// 使用mapGetters必须先引入
import { mapGetters } from 'vuex';
// import Vue from 'vue';

export default {
   data () {
      return {
         msg: '',
         header: '',
         showImg: false,
         uid: 6,
         aCts: ''
      };
   },
   props: [],
   components: {
   },
   created () {
      // this.$store.dispatch('axiosTest');
      // let url = 'http://192.168.96.237/apiend/news/index.html';//get
      // const url = 'apiend/news/view.html'; // post
      // const sendData = {
         // id: 1
      // };

      // 添加请求拦截器
      // this.$http.interceptors.request.use(function(config){
      //    // 在发送请求之前做某事
      //    config.headers.t = 'Token' +'888';//添加header的值
      //     console.log(config);
      //      // console.log(localStorage.getItem("uid"));
      //      // alert(1);
      //      return config;
      //    },function(error){
      //      // 请求错误时做些事
      //      alert(2);
      //      return Promise.reject(error);
      //    });

      // 添加响应拦截器
      // this.$http.interceptors.response.use(function(response){
      //      // 对响应数据做些事
      //      return response;
      //    },function(error){
      //      // 请求错误时做些事
      //      console.log(error);
      //      return Promise.reject(error);
      //    });

      // this.$http.get(url,{params: sendData})
      // .then((res)=>{
      //   console.log(res);
      // })
      // .catch((err)=>{
      //   console.log(err);
      // });

      //  this.$http.post(url,sendData)
      //  .then((res)=>{
      //    console.log(res);
      //    this.msg = res.data.data.description;
      //  })
      //  .catch((err)=>{
      //    console.log(err);
      //  });
   },
   mounted () {
      // console.log(this.$route.params.editCts)
   },
   computed: {
      // text(){
      //   return this.$store.getters.getList;
      // },
      // count(){
      //   return this.$store.getters.getCount;
      // }

      // ...mapGetters代替上述的text和count，一直简写方法
      ...mapGetters(['getList', 'getCount', 'getTest'])
   },
   methods: {
      /* eslint-disable */
      addItem () {
         this.$store.dispatch('add', {
            'id': 2,
            'name': '002'
         });
         localStorage.setItem('uid', this.uid);
      },
      addCount () {
         this.$store.dispatch('addCount');
         const uuid = localStorage.getItem('uid');
         console.log(uuid);
      }
   }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.edit {
   font-size: 0.5rem;
   background: #ccc;
   width: 100%;
   height: 100%;
}
</style>
