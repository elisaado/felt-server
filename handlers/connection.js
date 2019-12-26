'use strict';

function connection(ws) {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send(message);
    });
}

module.exports = connection;
