<template>
    <div >
        <div v-for="(item, index) of list" 
            :key="index" 
            class="alert"
            v-bind:class="messageClass(item.type)">
            {{item.text}}, 
            {{item.id}}
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
      counter: 0,
      error: [],
      other: []
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
        if (newData.type == "danger") {
          this.error.unshift({
            text: newData.text,
            type: newData.type,
            id: ++this.counter
          });
        } else {
          this.other.unshift({
            text: newData.text,
            type: newData.type,
            id: ++this.counter
          });
        }
        this.list = this.error.concat(this.other);
        this.$nextTick(() => {
          setTimeout(this.changeStatus, 5000, this.counter);
        });
      }
    }
  },
  mounted: function() {
    setInterval(() => {
      this.list = this.list.filter(item => item.status != "removed");
      this.other = [];
      this.error = [];
    }, 2000);
  }
};
</script>

<style>
</style>
