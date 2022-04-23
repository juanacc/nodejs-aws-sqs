const {
  SQSClient,
  ListQueuesCommand,
  GetQueueAttributesCommand,
  SendMessageCommand,
  ReceiveMessageCommand,
  DeleteMessageCommand
} = require('@aws-sdk/client-sqs');

class sqsHelper {
  constructor(credentials) {
    this.sqsClient = new SQSClient({ key: credentials.accessKeyId, secret: credentials.secretAccessKey, region: credentials.region });
  }

  // los comandos que se ejecutan cuando invocamos a send, son clases, por lo que debemos pasarle los parametros que necesitamos
  listQueues() {
    // send nos permite enviar peticiones a amazon sqs
    return this.sqsClient.send(new ListQueuesCommand({}));
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
