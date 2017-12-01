
// Parmeters for lambda function. (This is default values of lambda function test.)
var event = {
  key3: 'value3',
  key2: 'value2',
  key1: 'value1'
};

var context = {
  // callbackWaitsForEmptyEventLoop: [Getter/Setter],
  done: function(err, message) {
    return;
  },
  // succeed: [Function: succeed],
  // fail: [Function: fail],
  logGroupName: '/aws/lambda/myFunctionName',
  logStreamName: 'YYYY/MM/DD/[$LATEST]00000000000000000000000000000000',
  functionName: 'myFunctionName',
  memoryLimitInMB: '128',
  functionVersion: '$LATEST',
  // getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
  invokeid: '00000000-0000-0000-0000-000000000000',
  awsRequestId: '00000000-0000-0000-0000-000000000000',
  invokedFunctionArn: 'arn:aws:lambda:ap-northeast-1:000000000000:function:myFunctionName'
};

var callback = () => {
};

var lambda = require("./build/index");
lambda.handler(event, context, callback);
