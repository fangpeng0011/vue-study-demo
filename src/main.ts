import {createApp} from 'vue'
import './style.css'
import App from './App.vue'


/**
 *  createApp 是 Vue 3 提供的一个全局函数，用于创建一个新的 Vue 应用实例。
 *      App 是从 ./App.vue 导入的根组件，它代表了整个应用的根节点，所有其他组件都会被嵌套在这个根组件之下。
 *  mount 是 Vue 应用实例的一个方法，作用是将 Vue 应用挂载到指定的 DOM 元素上。
 *      '#app' 是一个 CSS 选择器，它指向 HTML 文件里 id 为 app 的元素。
 *      一般在 index.html 文件里会有类似 <div id="app"></div> 的元素，Vue 应用会将这个元素作为挂载点，把根组件 App 的内容渲染到这个元素中。
 */
createApp(App).mount('#app')
