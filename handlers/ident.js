module.exports = ({ ws, args, store }) => {
  if (ws.data.client) return ws.send('Cannot change client');
  if (args.length === 0) return ws.send('No arguments provided');
  const client = args[0].toUpperCase();

  if (client !== 'CTL' && client !== 'PRN') return ws.send('Invalid client');

  ws.data.client = client;
  return ws.send('OK');
};
