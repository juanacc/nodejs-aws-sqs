require('dotenv').config();
const sqsHelper = require('./helpers/sqsHelper');
const { config } = require('./utils/access');

(async () => {
  const sqs = new sqsHelper(config);

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MaxNumberOfMessages: 10 //cantidad maxima de mensajes que quiero obtener
  };

  console.log(await sqs.receiveMessage(params));
})();
