// import Notes from './components/Notes'
// // import App from './App.vue';


// const vuenote = {
//     Notes
// };

// // 导出 install 函数
// // Vue.use() 会调用这个函数
// const install = function(Vue, opts = {}) {
//   // 如果安装过就忽略
//   if (install.installed) return;

//   // 指定组件 name
//   Vue.component(vuenote.name, vuenote);
// }

// // 自动安装 方便打包成压缩文件, 用<script scr=''></script>的方式引用
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// // 把模块导出
// export  {install}
// export {vuenote}

import Notes from './components/Notes'
const vuenote = {
  // install: function(Vue) {
  //   Vue.component('vuenote', Notes)
  // }
  install: function(vue) {
    vue.component('Notes', vuenote)
    const LoadingObj = vue.extend(vuenote)
    let vm = new LoadingObj({
      el: document.createElement('div')
    })
    console.log(vm);
    document.body.appendChild(vm.$el)

}
}
// if (typeof window !== 'undefined' && window.Vue) { 
// 	window.Vue.use(vuenote) 
// }
export default vuenote
 
