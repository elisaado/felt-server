module.exports = ({ ws, args, store }) => {
  if (args.length !== 0) return ws.send('Too many arguments provided');
  if (ws.data.client !== 'CTL') return ws.send('Invalid ident');
  if (!ws.data.roomNumber) return ws.send('Not in a room');

  const { presentation, controllers } = store.rooms[ws.data.roomNumber];
  const i = controllers.indexOf(ws);

  controllers.splice(i);
  presentation.send(`Controller ${i + 1} has quit`);

  delete ws.data.roomNumber;

  return ws.send('OK');
};
