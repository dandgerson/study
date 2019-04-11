'use strict';

const events = require('events');
const fs = require('fs');

class Watcher extends events.EventEmitter {
  constructor(watchDir, processedDir) {
    super();
    this.watchDir = watchDir;
    this.processedDir = processedDir;
  }

  watch() {
    const watcher = this;
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err;
      for (const index in files) {
        watcher.emit('process', files[index]);
      }
    });
  }

  start() {
    const watcher = this;
    fs.watchFile(watchDir, () => {
      watcher.watch();
    });
  }
}

const watchDir = '../3.2.2',
  processedDir = '../done';

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
  const watchFile = this.watchDir + '/' + file;
  const processedFile = this.processedDir + '/' + file.toLowerCase();

  fs.rename(watchFile, processedFile, err => {
    if (err) throw err;
  });
});

watcher.start();