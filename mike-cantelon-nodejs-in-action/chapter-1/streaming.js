'use strict';

const fs = require('fs');

const stream = fs.createReadStream('./package.json');

stream.on('data', chunk => {
  console.log(chunk);
});

stream.on('end', () => {
  console.log('finished');
});