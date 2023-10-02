import redis from 'redis';
const kue = require('kue');

const queue = kue.createQueue();

const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`,
  );
};

queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done();
});
queue.on('error', (err) => {
  console.log(err);
});
