'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((require, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./package.json').pipe(response);
}).listen(3000);

console.log('Server running at http://localhost:3000/');