'use strict';

const rooms = {};

// This function is run for every new connection
function connection(ws) {
    ws.on('message', (message) => {
        // check for undefined or null message
        if (!message || !message.length) return;

        const parts = message.split(" ")
            .map(part => part.toLowerCase());

        switch (parts[0]) {
            case "ident": {
                console.log(ws.data);

                if (!ws.data) { // Check if ws.data exists

                }
                break;
            } case "init": {

                break;
            } case "kill": {

                break;
            } case "join": {

                break;
            } case "quit": {

                break;
            } case "left": {

                break;
            } case "right": {

                break;
            } case "up": {

                break;
            } case "down": {

                break;
            }

            default: {
                ws.send("Unknown command");
            }
        }
    });
}

module.exports = connection;
