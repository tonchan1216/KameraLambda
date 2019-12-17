var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {
    var params = {
        TableName: "demo_test",
        Key:{
            test_id: "1",
        }
    };
    console.log("event:", event);
    dynamo.get(params, function(err, data) {
        console.log("dynamo_data:", data);
        console.log("dynamo_err:", err);
        context.done(null, data);
    });
};