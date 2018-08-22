'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var params = function (req) {
    let q = req.url.split('?'), result = {};
    if (q.length >= 2) {
        q[1].split('&').forEach((item) => {
            try {
                result[item.split('=')[0]] = item.split('=')[1];
            } catch (e) {
                result[item.split('=')[0]] = '';
            }
        })
    }
    return result;
}

http.createServer(function (req, res) {
    req.params = params(req);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('DHK ECO TEST ' + 'URL Input:\n ' + req.url);
    res.end('DHK ECO TEST '+'URL Input:\n '+req.url);
}).listen(port);
