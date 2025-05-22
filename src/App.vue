<!--
    <script setup> 是 Vue 3.2 引入的语法糖，极大简化了组合式 API 的使用。它的主要作用如下：
      简化代码结构：无需显式定义 setup 函数，直接在 <script setup> 标签内编写逻辑代码，减少模板代码。
      自动注册组件和指令：在 <script setup> 中导入的组件和指令可直接在模板中使用，无需额外注册。
      响应式数据处理：可以直接使用 ref、reactive 等函数创建响应式数据，并在模板中使用。

      setup的执行时机，在beforeCreate之前执行。

-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

console.log("setup")
const messageSetUp = "HelloWorld"
const logMessage = () => {
  console.log(messageSetUp)
}

/**
 *  setup的执行时机，在beforeCreate之前执行。
 *  setup特点是：定义数据+函数 然后以对象的方式return出去
 *  <script setup> 经过语法糖的封装更简单的使用组合式API
 *  setup中的this指向的是undefined
 */

</script>

<template>
  <div>{{ messageSetUp }}</div>
  <button @click="logMessage">Log Message</button>
  <div>
    <HelloWorld msg="Vite + Vue"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
