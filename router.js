const ident = require('./handlers/ident');
const init = require('./handlers/init');
const join = require('./handlers/join');

const store = {
  rooms: {},
};

module.exports = (ws) => {
  ws.on('message', (message) => {
    console.log(store);

    // check for undefined or null message
    if (!message || !message.length) return;

    const parts = message.split(' ')
      .map((part) => part.toLowerCase());

    const args = parts.slice(1);

    // check if ws.data exists
    if (!ws.data) ws.data = {};

    switch (parts[0]) {
      case 'ident': {
        ident({ ws, args, store });
        break;
      } case 'init': {
        init({ ws, args, store });
        break;
      } case 'kill': {
        break;
      } case 'join': {
        join({ ws, args, store });
        break;
      } case 'quit': {
        break;
      } case 'left': {
        break;
      } case 'right': {
        break;
      } case 'up': {
        break;
      } case 'down': {
        break;
      }

      default: {
        ws.send('Unknown command');
      }
    }
  });
};
