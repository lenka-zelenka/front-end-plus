// # Практика
//     1) Написать приложение, которое позволяет добавлять, удалять строки из таблицы. Данные хранить в model.

//     В model создать таблицу с полями - id, title, age, adress.
//     При добавлении строки - добавляется пустая строка.
//     При удалении строки - удаляется, если пустая строка. 

//     *Если в полях есть любая информация - вывести окно подтверждения удаления.

//     2) Каждую ячейку мы можем редактировать. При нажатии на ячейку - появляется popup с textarea и кнопка Apply.

var emptyData = {
    id: '',
    title: '',
    age: '',
    adress: '',
}
var vm = new Vue({
    el: '#table',
    data: {
        a: 1,
        tableContent: [{
            id: 0,
            title: '',
            age: '',
            adress: '',
        }]
    },
    methods: {
        addRow: function () {
            console.log('Added');
            this.tableContent.push({
                id: 0,
                title: '',
                age: '',
                adress: '',
            });
        },
        deleteRow() {
            // this.tableContent.pop()
            console.log('Deleted');
        }
    }
})
