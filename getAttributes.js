require('dotenv').config();
const sqsHelper = require('./sqsHelper');

(async () => {
  const sqs = new sqsHelper();
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    AttributeNames: ['All'] //filtro los parametros que quiere obtener
  };
  console.log(await sqs.getQueueAttributes(params));
})();
