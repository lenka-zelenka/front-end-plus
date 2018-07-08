var data = require('./data.js');
var goodItem = require('./goodItem.js')
// private members
var model = {
    goods: null
}


data.load().then(function(response){
    renderGoodsList(response);
});

function renderGoodsList(data) {
    model.goods = data.data.list;
    var goodsConteiner = document.getElementById('goods-container');
    goodsConteiner.innerHTML = '';
    var goodslist = '';
    model.goods.forEach(item => {
        goodslist += `<div class="col s12 m4 l3">${goodItem.renderGood(item)}</div>`;
    }); 
    goodsConteiner.innerHTML += goodslist;
}