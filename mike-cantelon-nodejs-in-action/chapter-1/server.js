'use strict';

const http = require('http');

http.createServer((require, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World<br>');
}).listen(3000);

console.log('Server running at http://localhost:3000/');