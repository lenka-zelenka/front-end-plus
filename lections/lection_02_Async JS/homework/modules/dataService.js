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
    if (!async) {
        let res = []
        for (let i of list) {
            res.push(await i)
        }
        return res
    }
    return Promise.all(list.map(item => item))
}
