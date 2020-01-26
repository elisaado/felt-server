module.exports = ({ ws, args, store }) => {
  if (args.length !== 1) return ws.send('Invalid number of arguments provided');
  if (ws.data.client !== 'CTL') return ws.send('Invalid ident');
  if (ws.data.roomNumber) return ws.send('Already in a room');

  const roomNumber = args[0];

  store.rooms[roomNumber].controllers.push(ws);
  ws.data.roomNumber = roomNumber;

  return ws.send('OK');
};
