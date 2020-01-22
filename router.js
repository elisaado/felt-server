const ident = require('./handlers/ident');

const store = {
  rooms: {},
};

module.exports = (ws) => {
  ws.on('message', (message) => {
    // check for undefined or null message
    if (!message || !message.length) return;

    const parts = message.split(' ')
      .map((part) => part.toLowerCase());

    const args = parts.slice(1);

    console.log(ws.data);

    // check if ws.data exists
    if (!ws.data) ws.data = {};

    switch (parts[0]) {
      case 'ident': {
        ident({ ws, args, store });
        break;
      } case 'init': {
        break;
      } case 'kill': {
        break;
      } case 'join': {
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
