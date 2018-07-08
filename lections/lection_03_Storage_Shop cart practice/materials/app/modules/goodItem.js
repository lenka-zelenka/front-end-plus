// private members
// var model = {
//     goods: null
// }


function renderGood(data) {
    // create the html for the goods items
    return `
            <div class="card" id="${data.id}">
                <div class="card-image">
                    <img src="${data.img}">
                </div>
                <div class="card-content">
                    <span class="card-title">${data.title}</span>
                    <span class="tial">${data.price}</span>
                </div>
                <div class="card-action">
                    <a class="add-to-cart" data-id="${data.id}" onclick="handlers.addToCart(event)">В корзину!</a>
                </div>
            </div>  
    `;
}
function addToCart(event) {
    itemId = event.target.dataset.id;
    selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    // localStorage.setItem('goods', JSON.stringify(data));

    // InitGoodsCart(selectedGood)
}

function setLocalGoods(item){
    var data = {};
    if (localStorage.goods) {
        data = getLocalGoods();
    }

    if (!data[item.id]) {
        data[item.id] = item;
        data[item.id].quantity = 1;
    }
    else {
        data[item.id].quantity++;
    }

    localStorage.setItem('goods', JSON.stringify(data));
}
function getLocalGoods() {
    return JSON.parse(localStorage.goods);
}

window.handlers = {
    addToCart
}

module.exports = {
    renderGood: renderGood
};
