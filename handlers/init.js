function generateRoomNumber(store) {
  const n = Math.floor(100000 + Math.random() * 900000);
  if (store.rooms[n]) return generateRoomNumber();

  return n;
}

module.exports = ({ ws, args, store }) => {
  if (args.length !== 0) return ws.send('Too many arguments provided');
  if (ws.data.client !== 'PRN') return ws.send('Invalid ident');
  if (ws.data.roomNumber) return ws.send('Already in a room');

  const roomNumber = generateRoomNumber(store);

  const room = {
    presentation: ws,
    controllers: [],
  };

  store.rooms[roomNumber] = room;
  ws.data.roomNumber = roomNumber;

  return ws.send(roomNumber);
};
