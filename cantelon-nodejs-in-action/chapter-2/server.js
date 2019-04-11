'use strict';

// Built-in modules
/**
 * Built-in http module provides HTTP server and client functionality
 */
const http = require('http');
/**
 * Built-in fs module provides filesystem-related functionality
 */
const fs = require('fs');
/**
 * Built-in path module provides filesystem path-related functionality
 */
const path = require('path');

// Third party module
/**
 * Add-on mime module provides ability to derive a MIME type based
 * on a filename extension
 */
const mime = require('mime');

/**
 * Cache object is where the contents of cached files are
 * stored
 */
const cache = {};

// helper functions
function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.write('Error 404: resource not found.');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    {'Content-Type': mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}

function serverStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(error, data) {
          if (error) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

const server = http.createServer(function(request, response) {
  let filePath = false;
  console.log('request.url: ' + request.url);
  if (request.url === '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + request.url;
  }
  console.log('filePath: ' + filePath);
  let absPath = './' + filePath;
  console.log('absPath: ' + absPath);
  serverStatic(response, cache, absPath);
});

server.listen(3000, function() {
  console.log('Server listening on port 3000.');
});

const chatServer = require('./lib/chat-server');
chatServer.listen(server);