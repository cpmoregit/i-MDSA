/**
 * http://usejsdoc.org/
 */
var rabbitMQ = require('../publisher/RabbitMQ.js');

function publish(message){
	rabbitMQ.publishMessage(message)
	console.log('Message Publish to RabbitMQ!' + args);
}

module.exports.publish = publish;