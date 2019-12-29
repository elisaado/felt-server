'use strict';

const WebSocket = require('ws');
const debug = require('debug')('felt-server');

const connectionHandler = require('./handlers/connection.js');

debug('Initializing server...')
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', connectionHandler);

debug('Listening on 0.0.0.0:%o', wss.address());
