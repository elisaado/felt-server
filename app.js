const WebSocket = require('ws');
const debug = require('debug')('felt-server');

const router = require('./router.js');

debug('Initializing server...');
const wss = new WebSocket.Server({ port: 8080, maxPayload: 1024 });
wss.on('connection', router);

debug('Listening on 0.0.0.0:%o', wss.address().port);
