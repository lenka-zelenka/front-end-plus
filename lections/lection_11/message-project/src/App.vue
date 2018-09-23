<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <form >
      <input type="text" name="message-input" v-model="msg.text">
      <select name="" id="" v-model="msg.type">
        <option value="">1</option>
        <option value="">2</option>
      </select>

    </form> -->
    <button v-on:click="msg={type: 'success', text:'Message success'}">success</button>
    <button v-on:click="msg={type: 'danger', text:'Message danger'}">danger</button>
    <button v-on:click="msg={type: 'warning', text:'Message warning'}">warning</button>
    <MessageBox v-bind:message="msg"/>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MessageBox from "./components/message-box.vue";
export default {
  name: "app",
  data() {
    return {
      msg: { type: "error", text: "Message text" }
    };
  },
  components: {
    HelloWorld,
    MessageBox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
