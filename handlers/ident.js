module.exports = ({ ws, args, store }) => {
  if (args.length !== 1) return ws.send('Invalid number of arguments provided');
  if (ws.data.client) return ws.send('Cannot change client');

  const client = args[0].toUpperCase();

  if (client !== 'CTL' && client !== 'PRN') return ws.send('Invalid client');

  ws.data.client = client;
  return ws.send('OK');
};
