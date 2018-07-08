// private members
// var model = {
//     goods: null
// }


function renderGood(data) {
    // create the html for the goods items
    return  `
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
    // console.log(itemId)
    // selectedGood = model.goods[itemId];
    // setLocalGoods(selectedGood);
    // InitGoodsCart(selectedGood)
}

window.handlers = {
    addToCart
}

module.exports = {
    renderGood: renderGood
};
