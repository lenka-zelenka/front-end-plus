// # Практика
//     1) Написать приложение, которое позволяет добавлять, удалять строки из таблицы. Данные хранить в model.

//     В model создать таблицу с полями - id, title, age, address.
//     При добавлении строки - добавляется пустая строка.
//     При удалении строки - удаляется, если пустая строка. 

//     *Если в полях есть любая информация - вывести окно подтверждения удаления.

//     2) Каждую ячейку мы можем редактировать. При нажатии на ячейку - появляется popup с textarea и кнопка Apply.


var app = new Vue({
    el: '#app',
    data: {
        editMode: '',
        editItem: null,
        tableContent: [{
            id: 0,
            title: 'Olena',
            age: 16,
            address: 'sdfsdf',
        },
        {
            id: 1,
            title: 'Ivan',
            age: 35,
            address: 'tt tt tt tt tt t',
        }],
        emptyData: {
            id: 0,
            title: '',
            age: '',
            address: '',
        }
    },
    methods: {
        fillData() {
            this.emptyData.id = this.tableContent.length;
            return this.emptyData;
        },
        addRow: function () {
            this.tableContent.push(this.fillData());
            $('#exampleModal').modal('hide');
        },
        edit(item, key){
            console.log()
            if(this.editItem) {
                this.editItem = null;
            }
            this.editItem = item.id + key;

        },
        deleteRow() {
            var result = false;
            var lastItem = this.tableContent[this.tableContent.length - 1];
            for (const key in lastItem) {
                if (lastItem[key]) {
                    result = confirm("Delete row?");
                    break;
                } else {
                    result = true;
                }
            }
            if (result) {
                this.tableContent.pop()
            }
        }
    }
})
$(function () {
    $('[data-toggle="popover"]').popover()
})