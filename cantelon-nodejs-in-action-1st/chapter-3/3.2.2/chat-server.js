'use strict';

const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', (id, client) => {
  this.clients[id] = client;
  this.subscriptions[id] = (senderId, message) => {
    (id !== senderId )&& this.clients[id].write(message);
  };
  this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', id => {
  channel.removeListener('broadcast', this.subscriptions[id]);
  channel.emit('broadcast', id, id + ' has left the chat.\n');
});

channel.on('shutdown', () => {
  channel.emit('broadcast', '', 'Chat has shut down.\n');
  channel.removeAllListeners('broadcast');
});



const server = net.createServer(client => {
  const id = client.remoteAddress + ':' + client.remotePort;

  client.on('connect', () => {
    channel.emit('join', id, client);
  });

  client.on('data', data => {
    data = data.toString();
    (data === 'shutdown\n') && channel.emit('shutdown');
    channel.emit('broadcast', id, data);
  });

  client.on('close', () => {
    channel.emit('leave', id);
  });
});
server.listen(8888);