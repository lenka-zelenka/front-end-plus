<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <app-first />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppFirst from './components/component1.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppFirst
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
