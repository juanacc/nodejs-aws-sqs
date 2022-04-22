const { SQSClient, ListQueuesCommand } = require('@aws-sdk/client-sqs');

class sqsClient {
  constructor() {
    //SQSClient recibe las credenciales de AWS, pero como estoy usando .env y dotenv, no necesito especificarlas ya que las toma directamente de ahi
    this.sqsClient = new SQSClient();
  }

  listQueues() {
    // send nos permite enviar peticiones a amazon sqs
    return this.sqsClient.send(new ListQueuesCommand());
  }

  getQueueAttributes(params) {
    return this.sqsClient.send(new GetQueueAttributesCommand(params));
  }
}

module.exports = sqsHelper;
