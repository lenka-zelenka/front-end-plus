<template>
    <div >
        <div v-for="(item, index) of list" 
            :key="index" 
            class="alert"
            v-bind:class="messageClass(item.type)">
            {{item.text}}
        </div>
    </div>
    
</template>

<script>
export default {
  name: "MessageBox",
  props: ["message"],
  data: function() {
    return {
      list: [],
      counter: 0
    };
  },
  methods: {
    messageClass(type) {
      return type ? "alert-" + type : "alert-secondary";
    },
    changeStatus(id) {
      this.list.forEach(element => {
        if (element.id === id) {
          element.status = "removed";
        }
      });
    }
  },
  watch: {
    message: {
      deep: true,
      handler: function(newData, oldData) {
        this.list.unshift({
          text: newData.text,
          type: newData.type,
          id: ++this.counter
        });
        this.$nextTick(() => {
          setTimeout(this.changeStatus, 5000, this.counter);
        });
      }
    }
  },
  mounted: function() {
    setInterval(() => {
      this.list = this.list.filter(item => (item.status != "removed"));
    }, 2000);
  }
};
</script>

<style>
</style>
