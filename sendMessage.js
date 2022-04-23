require('dotenv').config();
const sqsHelper = require('./helpers/sqsHelper');
const { config } = require('./utils/access');

(async () => {
  const sqs = new sqsHelper(config);

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MessageBody: JSON.stringify({ message: 'Hola mundo' })
  };

  console.log(await sqs.sendMessage(params));
})();
