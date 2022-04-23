require('dotenv').config();
const sqsHelper = require('./helpers/sqsHelper');
const { config } = require('./utils/access');

(async () => {
  const sqs = new sqsHelper(config);
  console.log(await sqs.listQueues());
})();
