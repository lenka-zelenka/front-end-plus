let express = require('express');
let fs = require('fs');
let app = express();
let port = 3780;

let access = true;

// MEAN - MongoDb, Express.js, Angular, Node.js 
// console.log(1);

app.use(function ( req, res, next) {
    if (!access) {
        return next(new Error());
    }
    return next();
});

app.use('/hack', function (req, res, next) {
    console.log('hack');
    access = false;
    next(new Error());
});

app.use(function (req, res, next) {
    console.log('-----------------------');
    console.log('Time:', Date.now());
    next();
});

app.use(function (req, res, next) {
    console.log('next');
    next();
});

app.get('/foo', function (req, res, next) {
    console.log('Request Type:', req.method);

    // res.send('hello /foo');
    next();
});

app.get('/foo', function (req, res, next) {
    console.log('second Request Type:', req.method);

    // res.send('foo');
    next();
});



app.use(function (req, res, next) {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get("user-agent")} \n`;

    fs.appendFileSync("log.txt", data);
    next();
});



app.listen(port);


console.log('Mock server listening on port ' + port);