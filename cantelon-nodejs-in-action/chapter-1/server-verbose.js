'use strict';

const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World<br>');
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');