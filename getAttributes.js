require('dotenv').config();
const sqsHelper = require('./helpers/sqsHelper');
const { config } = require('./utils/access');

(async () => {
  const sqs = new sqsHelper(config);
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    AttributeNames: ['All'] //filtro los parametros que quiere obtener
  };
  console.log(await sqs.getQueueAttributes(params));
})();
