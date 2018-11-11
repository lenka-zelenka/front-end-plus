<template>
  <div id="app">
    <Banner 
      v-bind:type="'desktop'"
      v-bind:bg="{url: {desktop: 'http://www.fresher.ru/wp-content/uploads/2018/03/1.jpg'}}"
      v-bind:title="'Card Title'"
      v-bind:price="444"
      v-bind:btn-title="'Купить сразу!'"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Banner
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
