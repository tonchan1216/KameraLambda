// JavaScript File
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
var dynamo = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {
  var params = {
    TableName: 'subject',
    Item: {
      'target_name': event.target_name,
      'target_id': event.target_id,
    }
  };

  var response = {
    "headers": {},
    "isBase64Encoded": false
  };

  dynamo.put(params, function (err, data) {
    if (err) {
      console.log(err);
      response.statusCode = 400;
      response.body = JSON.stringify(err);
    } else {
      response.statusCode = 200;
      response.body = JSON.stringify(data);
      context.done(null, response);
    }
  });
};