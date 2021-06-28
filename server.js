'use strict';
const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end("{'Nombre':'Hola mundo'}");
});
server.listen(8000);
