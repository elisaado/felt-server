module.exports = (ws) => {
  const heartBeat = setInterval(() => {
    ws.ping();
  }, 5000);

  ws.on('close', () => {
    clearInterval(heartBeat);
  });
};
