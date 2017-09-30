/**
 * http://usejsdoc.org/
 */

var kafka = require('../publisher/kafka.js');

function publish(message){
	kafka.publishMessage(message)
	console.log('Message Publish to Kafka!' + args);
}

module.exports.publish = publish;
