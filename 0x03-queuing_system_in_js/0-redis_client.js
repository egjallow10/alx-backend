import { createClient } from "redis";
const client = createClient()

client.on('connect', err => console.log(`Redis client connected to the server`));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

// client.connected(() => console.log(`Redis client connected to the server`));
// await client.set('key', 'value');
// await client.disconnect();

