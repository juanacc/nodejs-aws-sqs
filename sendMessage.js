require('dotenv').config();
const sqsHelper = require('./sqsHelper');

(async () => {
  const sqs = new sqsHelper();

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MessageBody: JSON.stringify({ message: 'Hola mundo' })
  };

  console.log(await sqs.sendMessage(params));
})();
