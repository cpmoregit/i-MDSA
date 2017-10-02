/**
 * 
 * Kafka
 *
 */

var kafka = require("kafka-node");

function publishMessage(message){

	var Producer = kafka.Producer;
	var client = new kafka.Client();
	
	var producer = new Producer( client );
	
	var payloads = [{ topic:"topic1", messages: message, partition:0}];
	
	producer.on("ready", function(){
		
		producer.send(payloads, function(err,data){
			console.log("Error while submission");
		}
		);
	});
	
}
