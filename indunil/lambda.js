let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {

    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/run`,
        AttributeNames: ['All'],
        MaxNumberOfMessages: '10',
        VisibilityTimeout: '15',
        WaitTimeSeconds: '10',
        MessageAttributeNames: ['a', 's', 'd']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    console.log("Success message");
                    console.log(message);
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                });
            } else {
                console.log("no msgesss");
                // console.log( data );
                // No messages to process
            }
        })
        .catch(err => {
            console.log("not Success");
            console.log(err);
            // error handling goes here
        });





    callback(null, { "message": "Successfully executed" });
}