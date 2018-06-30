function load(method, path) {
    var xhr = new XMLHttpRequest();
    xhr.open(metod, path, true)
    xhr.send();
    return new Promise(resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            resolve(JSON.parse(xhr.responseText));
        }
    };
}


var data = load('GET', '/data.json'),
    info = load('GET', '/info.json');

// var dataresponse = new Promise(resolve, reject) {
    
    
// }

