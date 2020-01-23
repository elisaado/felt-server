module.exports = ({ ws, args, store }) => {
  if (args.length === 0) return ws.send('No arguments provided');
  const component = args[0].toUpperCase();

  if (component !== 'CTL' && component !== 'SRV' && component !== 'PRN') return ws.send('Invalid client');

  ws.data.component = component;
  return ws.send('OK');
};
