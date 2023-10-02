const kue = require('kue');

const queue = kue.createQueue();

const jobData = {
  phoneNumber: '1321244',
  message: 'Hello, world',
};

// const job = queue.create('push_notification_code', jobData);
// job.on('enqueue', (id, type) => {
//   console.log('Notification job created: ${id}');
// });

var job = queue.create('push_notification_code', jobData).save(function (err) {
  if (!err) console.log(`Notification job created: ${job.id}`);
});

// job.complete('complete', () => {
//   console.log('Notification jobs complete');
// });
