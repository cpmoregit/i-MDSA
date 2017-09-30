/**
 * http://usejsdoc.org/
 */

var kafka = require('../publisher/kafka.js');

function publish(message){
//	kafka.publishMessage(message)
	console.log('Message Publish to Kafka!' + message);
}

module.exports.publish = publish;
