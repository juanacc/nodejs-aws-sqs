require('dotenv').config();
const sqsHelper = require('./sqsHelper');

(async () => {
  const sqs = new sqsHelper();

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MaxNumberOfMessages: 10 //cantidad maxima de mensajes que quiero obtener
  };

  console.log(await sqs.receiveMessage(params));
})();
