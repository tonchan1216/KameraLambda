// JavaScript File
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
var dynamo = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {

  var params = {
    TableName: 'Target',
    Item: {
      'target_name': event.target_name,
      'target_id': event.target_id,
    }
  };

  dynamo.put(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    }
    else {
      console.log("Success", data);
    }
  });
};
