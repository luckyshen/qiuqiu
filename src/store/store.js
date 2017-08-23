import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import common from '../common.js';

Vue.use(Vuex);
const store = new Vuex.Store({
   // 存放需要使用的数据
   state: {
      wCDN: '', // wwCDN地址
      videoRecommendInfo: '', // 视频推荐接口
      videoInfo: '', // 视频接口
      videoChoiceInfo: '', // 视频menu接口
      newsInfo: '', // 新闻接口
      newsChoiceInfo: '', // 新闻menu接口
      guideInfo: '', // 攻略接口
      guideChoiceInfo: '' // 攻略menu接口

   },
   // actions通过commit方法发出一个改变事件，组件中的dispatch会调用其中的方法，item表示组件传过来的参数
   // a或者addC表示store本身，有点类似于this。
   actions: {
      wCNDaddress: () => {
         let url = common.wURL + 'api/v1/config';
         let sendData = {};
         axios.get(url, sendData)
            .then((res) => {
               // console.log(res.data.data);
               store.commit('ADD_CDN', { obj: res.data.data });
            }).catch((err) => {
               console.log(err);
            });
      },
      videoAxios: (store) => {
         // let url = 'apiend/news/view.html';
         // let sendData = { id: 1 };
         // axios.post(url, sendData)
         //    .then((res) => {
         //       store.commit('addAxios', { obj: res.data.data.description });
         //    });
         // let url = 'http://192.168.96.118:11100/Api/Gplat/AjaxGetVideoIndexBlock'; // get
         let url = common.cURL + '/AjaxGetVideoIndexBlock'; // get
         axios.get(url)
            .then((res) => {
               store.commit('ADD_VIODE_Axios', { obj: res.data.data });
               store.commit('ADD_VIODE_RECOMMEND_Axios', { reObj: res.data.data.alist });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      videoChoiceAxios: (store, tid = 8) => {
         let url = common.cURL + '/AjaxGetVideoIndexBlockList'; // get
         const sendData = {
            tid: tid
         };
         axios.get(url, { params: sendData })
            .then((res) => {
               store.commit('ADD_VIDEO_CHIOCE_AXIOS', { obj: res.data.data });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      newsAxios: (store) => {
         let url = common.cURL + '/AjaxGetNewsIndexBlock'; // get
         const sendData = {
            // id: 1
         };
         axios.get(url, { params: sendData })
            .then((res) => {
               store.commit('ADD_NEWS_AXIOS', { obj: res.data.data });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      newsChoiceAxios: (store, tid = 23) => {
         let url = common.cURL + '/AjaxGetNewsIndexBlockList'; // get
         const sendData = {
            tid: tid
         };
         axios.get(url, { params: sendData })
            .then((res) => {
               store.commit('ADD_NEWS_CHIOCE_AXIOS', { obj: res.data.data });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      guideAxios: (store) => {
         let url = common.cURL + '/AjaxGetStrategyIndexBlock'; // get
         const sendData = {
            // id: 1
         };
         axios.get(url, { params: sendData })
            .then((res) => {
               store.commit('ADD_GUIDE_AXIOS', { obj: res.data.data });
            })
            .catch((err) => {
               console.log(err);
            });
      },
      guideChoiceAxios: (store, tid = 9) => {
         let url = common.cURL + '/AjaxGetStrategyIndexBlockList'; // get
         const sendData = {
            tid: tid
         };
         axios.get(url, { params: sendData })
            .then((res) => {
               store.commit('ADD_GUIDE_CHIOCE_AXIOS', { obj: res.data.data });
            })
            .catch((err) => {
               console.log(err);
            });
      }
   },
   // mutations中具体操作state中内容的改变，改变store必须在mutations内。arr和statettt表示所定义的state对象，item表示所传的参数。
   mutations: {
      ADD_CDN: (state, { obj }) => { state.wCDN = obj; },
      ADD_VIODE_RECOMMEND_Axios: (state, { reObj }) => { state.videoRecommendInfo = reObj; },
      ADD_VIODE_Axios: (state, { obj }) => { state.videoInfo = obj; },
      ADD_VIDEO_CHIOCE_AXIOS: (state, { obj }) => { state.videoChoiceInfo = obj; },
      ADD_NEWS_AXIOS: (state, { obj }) => { state.newsInfo = obj; },
      ADD_NEWS_CHIOCE_AXIOS: (state, { obj }) => { state.newsChoiceInfo = obj; },
      ADD_GUIDE_AXIOS: (state, { obj }) => { state.guideInfo = obj; },
      ADD_GUIDE_CHIOCE_AXIOS: (state, { obj }) => { state.guideChoiceInfo = obj; }
   },
   // 以对象形式获取store中保存的值
   getters: {
      getwCDN: (store) => {
         return store.wCDN;
      },
      getRecommendVideoInfo: (store) => {
         return store.videoRecommendInfo;
      },
      getVideoInfo: (store) => {
         return store.videoInfo;
      },
      getVideoChoiceInfo: (store) => {
         return store.videoChoiceInfo;
      },
      getNewsInfo: (store) => {
         return store.newsInfo;
      },
      getNewsChoiceInfo: (store) => {
         return store.newsChoiceInfo;
      },
      getGuideInfo: (store) => {
         return store.guideInfo;
      },
      getGuideChoiceInfo: (store) => {
         return store.guideChoiceInfo;
      }
   }
});
export default store;
