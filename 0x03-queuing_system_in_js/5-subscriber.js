const redis = require('redis')
const client = redis.createClient()
const publisher = redis.createClient()
const subcriber = redis.createClient()
const channel = 'holberton school channel'


publisher.on('connect',erro => console.log(`Redis client connected to the server`))
publisher.on('error',erro => console.log(`Redis client not connected to the server: ${erro}`))

publisher.publish(channel, channel)
subcriber.subscribe(channel)

subcriber.on('message', (theChannel, message) => {
    if (message === 'KILL_SERVER') {
        subcriber.unsubscribe();
        subcriber.quit();
    }
})

const publishMessage = (meaasge, time) => {
    console.log(`About to send ${meaasge}`)
    publisher.publish(channel, channel)
}