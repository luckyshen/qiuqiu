// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ["plugin:vue-libs/recommended"],
   rules: {
     // override if necessary
     'indent': [2, 3, { 'SwitchCase': 1 }],
     'semi':  [2, "always"],// 强制语句分号结尾
     'prefer-const': 0,// 要求使用 const 声明那些声明后不再被修改的变量
     'space-before-function-paren': 0
   },  
  'globals': {  
      "Swiper": true  
   } 
  
}
