const fs = require('fs');

/**
 * Why the file path like as it is, like the file is in the root
 * directory. Thats in the same time the current file in the chapter-1
 * directory.
 */
fs.readFile('./package.json', (error, data) => {
  if (error) new Error('Something goes wrong', error);
  console.log('callback execute');
  console.log(data);
});
