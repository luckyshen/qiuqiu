import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import iView from 'iview';
Vue.use(iView);
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const main = resolve => require(['@/components/Home/main/main'], resolve);
const admin = resolve => require(['@/components/Admin/admin/adminELE'], resolve);

const cts1 = resolve => require(['@/components/Home/asyncComponents/cts1/cts1'], resolve);
const cts2 = resolve => require(['@/components/Home/asyncComponents/cts2/cts2'], resolve);
const newsList = resolve => require(['@/components/Home/childComponents/newsList/newsList'], resolve);
const newsDetail = resolve => require(['@/components/Home/childComponents/newsDetail/newsDetail'], resolve);
const childOne = resolve => require(['@/components/Home/asyncComponents/childOne/childOne'], resolve);
const childTwo = resolve => require(['@/components/Home/asyncComponents/childTwo/childTwo'], resolve);
const childOneOne = resolve => require(['@/components/Home/asyncComponents/childOneOne/childOneOne'], resolve);
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
   {
      path: '/',
      name: 'default',
      component: main
   },
   // {name:'edit', path: '/edit', component: edit,meta: {requireAuth: true} },//需要验证的路由地址需要添加meta属性
   { name: 'cts1', path: '/cts1', component: cts1 },
   { name: 'tthome', path: '/', redirect: '/cts2' },
   {
      name: 'ttname',
      path: '/cts2',
      component: cts2,
      children: [
         // { name: '', path: '/', redirect: '/cts2/childOne' },// 多级嵌套时不能多次重定义
         {
            name: 'childOne',
            path: '/cts2/childOne:code',
            component: childOne,
            children: [
               { name: 'childOneOne', path: '/cts2/childOne/childOneOne', component: childOneOne }
            ]
         },
         { name: 'childTwo', path: '/cts2/childTwo', component: childTwo }
      ]
   },
   {
      path: '/admin',
      name: 'admin',
      component: admin
   },
   {
      path: '/newsList',
      name: 'newsList',
      component: newsList
   },
   {
      path: '/newsList/:id', /* 路由传参 */
      name: 'newsDetail',
      component: newsDetail
   }
   // {
   //    path: '/newsList/query',
   //    name: 'newsDetailQ',
   //    component: newsDetail
   // }

];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
   routes: routes, // （缩写）相当于 routes: routes
   // mode: 'history', // 去掉url中调用路由时的#
   base: './'
});

import login from '@/setting/login.js';

router.beforeEach((to, from, next) => {
   iView.LoadingBar.start(); // 路由跳转页面加载进度条显示
   if (to.meta.requireAuth && !login.authenticated()) {
      next({
         path: '/cts2',
         query: { redirect: to.fullPath }
      });
   } else {
      next();
   }
});
router.afterEach((to, from, next) => {
   iView.LoadingBar.finish(); // 路由跳转页面加载进度条隐藏
});

export default router;
