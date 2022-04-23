require('dotenv').config();
const sqsHelper = require('./helpers/sqsHelper');
const { config } = require('./utils/access');

(async () => {
  const sqs = new sqsHelper(config);

  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    ReceiptHandle: 'AQEBEkMcJGKnlFm+WsPdBrNZJb2/67Skmgeh1XXdOP096g2ZirYj4/Z9Pg7/2LbO26CqQOS8qRVTNWZoDT5FzLgT58pdGIhPW+Pd62lqeCchjxpKPe6QQWFCZPGRz4biL60TaQoAcG+6YR2UzbDc7PTYJ9J8PegS6GlIEtM3izHFwdpbaN8c1K7137Kk5mHUCfkeu/R/khdtcFit/QhZWTQgZypQltBPRAwPIZaOARlYLC0gbMQJ8AgT0wz+tVP6s3FtlUPTg7hSgk+rLJDOKrFNjmxrBhobDSRf3q1dCuN8VkhA8Sy1SHaVdgWnPIKM2XG/aACTdJekbWGbOxHpb7PTCh/1r4iZW9JWQExCshHIhNvN3kidDZtj+dDD92o+hOOawLcQJW/pC/47QWf1zJbPDA==' //el receipt handle es el id del mensaje que quiero borrar
  };

  console.log(await sqs.deleteMessage(params));
})();
