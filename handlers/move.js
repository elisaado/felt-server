module.exports = ({ ws, args, store }) => {
  if (args.length !== 1) return ws.send('Invalid number of arguments provided');
  if (ws.data.client !== 'CTL') return ws.send('Invalid ident');
  if (!ws.data.roomNumber) return ws.send('Not in a room');

  const movements = [
    'left',
    'right',
    'up',
    'down',
  ];

  if (!movements.includes(args[0])) return ws.send('Invalid movement');

  store.rooms[ws.data.roomNumber].presentation.send(args[0]);

  return ws.send('OK');
};
