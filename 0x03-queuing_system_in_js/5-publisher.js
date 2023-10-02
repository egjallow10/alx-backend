const redis = require('redis');
const publisher = redis.createClient();
const channel = 'holberton school channel';

publisher.on('connect', (erro) =>
  console.log(`Redis client connected to the server`),
);
publisher.on('error', (erro) =>
  console.log(`Redis client not connected to the server: ${erro}`),
);

const publishMessage = (message, time) => {
  setTimeout(() => {
    publisher.publish(channel, message);
  }, time);
};

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
