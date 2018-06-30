var render = require('./renderService.js');
var data = require('./dataService.js');

list = [
    data.load('GET', 'https://api.github.com/orgs/hillel-front-end'),
    data.load('GET', 'https://api.github.com/orgs/hillel-front-end/repos')
]

data.runAsyncAll(list, true).then((item) => {
    render.renderData(item)
});
