'use strict';

class Chat {
  constructor(socket) {
    this.socket = socket;
  }

  sendMessage(room, text) {
    const message = {
      room: room,
      text: text
    };
    this.socket.emit('message', message);
  }

  changeRoom(room) {
    this.socket.emit('join', {
      newRoom: room
    });
  }

  processCommand(command) {
    const words = command.split(' ');
    const commandText = words[0]
      .substring(1, words[0].length)
      .toLowerCase();
    let message = false;
  
    let room, name;
    switch(commandText) {
    case 'join':
      words.shift();
      room = words.join(' ');
      this.changeRoom(room);
      break;
    case 'nick':
      words.shift();
      name = words.join(' ');
      this.socket.emit('nameAttempt', name);
      break;
    default:
      message = 'Unrecognized command.';
      break;
    }
    
    return message;
  }
}

// const Chat = function(socket) {
//   this.socket = socket;
// };

// Chat.prototype.sendMessage = function(room, text) {
//   const message = {
//     room: room,
//     text: text
//   };
//   this.socket.emit('message', message);
// };

// Chat.prototype.changeRoom = function(room) {
//   this.socket.emit('join', {
//     newRoom: room
//   });
// };

// Chat.prototype.processCommand = function(command) {
//   const words = command.split(' ');
//   var command = words[0]
//     .substring(1, words[0].length)
//     .toLowerCase();
//   let message = false;

//   switch(command) {
//   case 'join':
//     words.shift();
//     const room = words.join(' ');
//     this.changeRoom(room);
//     break;
//   case 'nick':
//     words.shift();
//     const name = words.join(' ');
//     this.socket.emit('nameAttempt', name);
//     break;
//   default:
//     message = 'Unrecognized command.';
//     break;
//   }
  
//   return message;
// };