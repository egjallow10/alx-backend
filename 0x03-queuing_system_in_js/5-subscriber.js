const redis = require('redis')
const client = redis.createClient()
const publisher = redis.createClient()
const subcriber = redis.createClient()
const logMessage = 'holberton school channel'


publisher.on('connect',erro => console.log(`Redis client connected to the server`))
publisher.on('error',erro => console.log(`Redis client not connected to the server: ${erro}`))

// publisher.publish(channel, channel)
// subcriber.subscribe(channel)

// subcriber.on('message', (theChannel, message) => {
//     if (message === 'KILL_SERVER') {
//         subcriber.unsubscribe();
//         subcriber.quit();
//     }
// })

const publishMessage = (meaasge, time) => {
    if(meaasge === 'KILL_SERVER'){
        publisher.quit()
    }
    
    setTimeout(() =>{
        console.log(`About to send ${meaasge}`);
        publisher.publish(logMessage, meaasge);


    },time)
}
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);