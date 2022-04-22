const {
  SQSClient,
  ListQueuesCommand,
  SendMessageCommand,
  ReceiveMessageCommand,
  DeleteMessageCommand
} = require('@aws-sdk/client-sqs');

class sqsClient {
  constructor() {
    //SQSClient recibe las credenciales de AWS, pero como estoy usando .env y dotenv, no necesito especificarlas ya que las toma directamente de ahi
    this.sqsClient = new SQSClient();
  }

  // los comandos que se ejecutan cuando invocamos a send, son clases, por lo que debemos pasarle los parametros que necesitamos
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

  deleteMessage(params) {
    return this.sqsClient.send(new DeleteMessageCommand(params));
  }
}

module.exports = sqsHelper;
