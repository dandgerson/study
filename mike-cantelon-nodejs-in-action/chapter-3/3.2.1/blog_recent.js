'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => { // callback
  if (req.url === '/') {
    fs.readFile('./titles.json', (err, data) => { // callback
      if (err) return hadError(err, res);
      
      const titles = JSON.parse(data.toString());
      
      fs.readFile('./template.html', (err, data) => { // callback
        if (err) return hadError(err, res);
        
        const tmpl = data.toString();
        const html = tmpl.replace('%', titles.join('</li><li>'));
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      });
    });
  }
}).listen(3000, '127.0.0.1');

function hadError(err, res) {
  console.log(err);
  res.end('Server Error');
}