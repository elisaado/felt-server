const rateLimit = require('ws-rate-limit')('1s', 5);

const ident = require('./handlers/ident');
const init = require('./handlers/init');
const kill = require('./handlers/kill');
const join = require('./handlers/join');
const quit = require('./handlers/quit');
const move = require('./handlers/move');

const store = {
  rooms: {},
};

module.exports = (ws) => {
  rateLimit(ws);

  // Add ws.data if it does not exist
  if (!ws.data) ws.data = {};

  ws.on('message', (message) => {
    console.log(store);

    // check for undefined or null message
    if (!message || !message.length) return;

    const parts = message.split(' ')
      .map((part) => part.toLowerCase());

    const args = parts.slice(1);

    switch (parts[0]) {
      case 'ident': {
        ident({ ws, args, store });
        break;
      } case 'init': {
        init({ ws, args, store });
        break;
      } case 'kill': {
        kill({ ws, args, store });
        break;
      } case 'join': {
        join({ ws, args, store });
        break;
      } case 'quit': {
        quit({ ws, args, store });
        break;
      } case 'move': {
        move({ ws, args, store });
        break;
      }

      default: {
        ws.send('Unknown command');
      }
    }
  });

  ws.on('close', () => {
    if (Object.entries(ws.data).length === 0 || !ws.data.roomNumber) return;

    if (ws.data.client === 'PRN') {
      const room = store.rooms[ws.data.roomNumber];

      room.controllers.forEach((controller) => {
        controller.send(`Room ${controller.data.roomNumber} was killed`);
        delete controller.data.roomNumber;
      });

      delete store.rooms[ws.data.roomNumber];
      delete ws.data.roomNumber;
    } else if (ws.data.client === 'CTL') {
      const { presentation, controllers } = store.rooms[ws.data.roomNumber];
      const i = controllers.indexOf(ws);

      controllers.splice(i);
      presentation.send(`Controller ${i + 1} has quit`);

      delete ws.data.roomNumber;
    }

    ws.data = null;
  });

  ws.on('limited', () => {
    ws.send('Ratelimit exceeded');
    ws.close(1014);
  });
};
