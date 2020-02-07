module.exports = ({ ws, args, store }) => {
  if (args.length !== 0) return ws.send('Too many arguments provided');
  if (ws.data.client !== 'PRN') return ws.send('Invalid ident');
  if (!ws.data.roomNumber) return ws.send('Not in a room');

  const room = store.rooms[ws.data.roomNumber];

  room.controllers.forEach((controller) => {
    controller.send(`Room ${controller.data.roomNumber} was killed`);
    delete controller.data.roomNumber;
  });

  delete store.rooms[ws.data.roomNumber];
  delete ws.data.roomNumber;

  return ws.send('OK');
};
