require('dotenv').config();
const sqsHelper = require('./sqsHelper');

(async () => {
  const sqs = new sqsHelper();

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    ReceiptHandle: 'id_del_mensaje_a_borrar' //el receipt handle es el id del mensaje que quiero borrar
  };

  console.log(await sqs.deleteMessage(params));
})();
