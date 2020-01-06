'use strict';

const rooms = {};

// This function is run for every new connection
function connection(ws) {
    console.log(ws);

    ws.on('message', (message) => {
        // check for undefined or null message
        if (!message || !message.length) return;

        const parts = message.split(" ")
            .map(part => part.toLowerCase());

        switch (parts[0]) {
            case "":
            default:

        }
    });
}

module.exports = connection;
