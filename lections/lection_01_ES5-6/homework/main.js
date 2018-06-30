// // 1) 
// var data = [{ value: 10 }, { value: 12 }, { value: 3 }, {value: 11}, {value: 1.1}];

// // var ascendinglist =  data.sort(sortAscending);
// console.log(data.sort(sortAscending));

// var simpleValue = data.map(item => item.value);
// console.log(simpleValue);

// function sortAscending(a, b) {
//     return a.value > b.value;
// }


// 2 --------------------------------------------------
fetch('/data.json')
    .then(function (response) {
        response.json()
            .then(function (model) {
                viewModel.model = model;
                document.getElementById('goods-container').innerHTML = viewModel.render;
            })
        // return response.json();
    })

class ViewController {
    constructor() { }

    template(item) {
        return `
        <div class="col s12 m4 l3">
            <div class="card" id="">
                <div class="card-image">
                    <img src="${item.img}">
                </div>
                <div class="card-content">
                    <span class="card-title">${item.title}</span>
                    <span class="tial">${item.size}</span>
                </div>
                <div class="card-action">
                    <a class="add-to-cart">В корзину!</a>
                </div>
            </div>
        </div>       
    `
    }

    get render() {
        return this.model.map(item => this.template(item)).join('')
    }
}
var viewModel = new ViewController()
