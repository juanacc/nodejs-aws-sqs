const {
  SQSClient,
  ListQueuesCommand,
  SendMessageCommand,
  ReceiveMessageCommand
} = require('@aws-sdk/client-sqs');

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

  sendMessage(params) {
    return this.sqsClient.send(new SendMessageCommand(params));
  }

  receiveMessage(params) {
    return this.sqsClient.send(new ReceiveMessageCommand(params));
  }
}

module.exports = sqsHelper;
