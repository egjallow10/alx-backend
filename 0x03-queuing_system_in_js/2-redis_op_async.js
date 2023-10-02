import redis from 'redis';
import { createClient } from 'redis';
const { promisify } = require('util');
const client = createClient();
const getAsync = promisify(client.get).bind(client);

client.on('connect', (err) =>
  console.log(`Redis client connected to the server`),
);
client.on('error', (err) =>
  console.log(`Redis client not connected to the server: ${err}`),
);

const setNewSchool = async (schoolName, value) => {
  client.set(schoolName, value, redis.print);
};

const displaySchoolValue = async (schoolName) => {
  client.get(`${schoolName}`, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
// client.quit()
