// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from '@/store/store';
import router from '@/router/router';

import '@/common/css/index.css'; // 加载公共css，包括图标字体

// import vueg from 'vueg';
// import 'vueg/css/transition-min.css';
// const options = {
//    forwardAnim: 'fadeInRight' // 前进动画,默认为fadeInRight
// };
// Vue.use(vueg, router, options);

import VueAwesomeSwiper from 'vue-awesome-swiper';// vue滑块swiper
Vue.use(VueAwesomeSwiper);

import iView from 'iview'; // 引入iview插件
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import Element from 'element-ui'; // 引入element插件
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);
// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

// 判断是否移动端登入
let isMobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (isMobi) {
   window.location.href = 'https://www.baidu.com';
}

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app');

// 打开的默认路径
// router.push('/');

export default app;
