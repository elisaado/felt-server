module.exports = ({ ws, args, store }) => {
  const component = args[0].toUpperCase();

  if (component !== 'CTL' && component !== 'SRV' && component !== 'PRN') return ws.send('Invalid client');

  ws.data.component = component;
  ws.send('OK');
};
