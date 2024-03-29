import redis from 'redis';
const subscriber = redis.createClient();
subscriber.subscribe('holberton school channel');

subscriber.on('connect', () => {
  console.log('Redis subscriber connected');
});
subscriber.on('error', (err) => {
  console.log(`Redis subscriber not connected to the server: ${err}`);
});
subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'Holberton Student #3 starts course');
  process.exit(0);
  // subscriber.unsubscribe(channel);
});
