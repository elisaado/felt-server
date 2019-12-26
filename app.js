'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
const connectionHandler = require('./handlers/connection.js');

wss.on('connection', connectionHandler);
