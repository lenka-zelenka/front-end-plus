var organization = [],
    repos = [];


function renderData(data) {
    organization = data[0];
    repos = data[1];
    console.log(data)
    // var logo = document.getElementById("logo");
    // logo.innerHTML += `<img src="${organization.avatar_url}" alt="">`;  
}

module.exports = { renderData }