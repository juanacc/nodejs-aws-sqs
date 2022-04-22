require('dotenv').config();
const sqsHelper = require('./sqsHelper');

(async () => {
  const sqs = new sqsHelper();
  console.log(await sqs.listQueues());
})();
