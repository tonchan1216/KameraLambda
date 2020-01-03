var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {
var params = {
    TableName: "spot",
};

dynamo.scan(params, function(err, data){
    if(err){
        console.log(err);
    }else{
       data.Items.forEach(function(car, index){
           console.log(car.spot);
       });
        context.done(null, data);
    }
});
};
