/**
 * http://usejsdoc.org/
 */
var cassandra = require('../publisher/cassandra.js');

function publish(message){
//	cassandra.publishMessage(message)
	console.log('Message Publish to Cassandra!' + message);
}

module.exports.publish = publish;