var repos = [];

function load(method, path) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, path, true);
    xhr.send();
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                reject(xhr);
            }
            resolve(JSON.parse(xhr.responseText));
        }
    })
}

async function runAsyncAll(list, async) {

    let data = [];
    if (async) {
        list.forEach(async (element) => {
            data.push(await element)
        });
    }
    return data;
}
