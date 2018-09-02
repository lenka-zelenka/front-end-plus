var left = new Vue({
  el: '#left',
  data: {
    list: [
      12,
      24,
      35,
      14
    ]
  },
  methods: {
    sendToRight() {
      right.list.push(this.list.pop());
    }
  }
})


// // ---------------------------------------

var right = new Vue({
  el: '#right',
  data: {
    list: [
    ]
  },
  methods: {
    sendToLeft() {
      left.list.push(this.list.pop());
    }
  }
})
// ------------------------------------------

var popup = new Vue({
  el: "#popup",
  data: {
    userData: [
      { name: '' },
      { email: '' },
      { city: '' }
    ],
    step: 1
  },
  methods: {
    raiseStep() {
      this.step++;
    }
  }
})

// // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 3000)


// // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [{
//         text: 'Изучить JavaScript'
//       },
//       {
//         texts: 'Изучить Vue'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })

// console.log(app4.todos)




// // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!'
//   },
//   methods: {
//     clickMeEvent() {
//       this.message += ' click'
//     }
//   }
// })

// // ---------------------------------------

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     result: 'RESULT'
//   }
// })

// // ---------------------------------------

// // ---------------------------------------

// Vue.component('todo-item', {
//   props: ['struct'],
//   template: `<li>{{ struct.id }} | {{ struct.value }}</li>`
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     value: 'example val',
//     list: [
//       12,
//       24,
//       35,
//       14
//     ]
//     // value: [1, 6, 7, 9],
//     // value: 20
//   }
// })