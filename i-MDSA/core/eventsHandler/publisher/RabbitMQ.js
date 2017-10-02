/**
 * 
 * Rabbit MQ integration
 *
 */

var stompit = require("stompit");
var connectionDetails = require("../../../configuration/rabbitMQ.json");

function publishMessage(message){

	stompit.connect(connectionDetails, function(error,client){
	
	var sendHeaders ={
			"destination":"queue/test",
			"content-type":"text/plain"
	};
	
	var frame = client.send(sendHeaders);
	frame.write(message);
	frame.end();
	
	client.disconnect();
	
	});

}

module.exports.publishMessage = publishMessage;