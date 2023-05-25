import redis from 'redis'
import { createClient } from "redis";
const client = createClient()

client.on('connect', err => console.log(`Redis client connected to the server`));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

// client.connected(() => console.log(`Redis client connected to the server`));
// await client.set('key', 'value');
// await client.disconnect();

const setNewSchool = async (schoolName, value) => {
  
client.set(schoolName, value, redis.print)
    
}

const displaySchoolValue = async (schoolName) => {
    client.get(schoolName, redis.print);
   
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');


