const kue = require('kue');

const push_notification_code = kue.createQueue();

const jobData = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

var job = push_notification_code
  .create('push_notification_code', jobData)
  .save(function (err) {
    if (!err) console.log(`Notification job created: ${job.id}`);
  });
