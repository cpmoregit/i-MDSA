/**
 * 
 * Local Event Publisher
 *
 */

var EventEmitter = require('events');
var eventIDs = require("./EventID");

// Import Listeners
var startupEventListener = require("./listeners/startupEventListeners");
var shutdownEventListener = require("./listeners/shutdownEventListener");
var mqttPublishEventListener = require("./listeners/MQTTPublishListener");
var cassandraPublisherListener = require("./listeners/CassandraPublisherListener");
var kafkaPublisherListener = require("./listeners/KafkaPublisherListener");
var rabbitMQPublisherListener = require("./listeners/RabbitMQPublisherListener");

// Register Listeners
class StartupEventHandler extends EventEmitter {}
const startupEventHandler = new StartupEventHandler();
startupEventHandler.on('startup', (message)=>{ startupEventListener.startup(message); });

class ShutdownEventHandler extends EventEmitter {}
const shutdownEventHandler = new ShutdownEventHandler();
shutdownEventHandler.on('shutdown', (message)=>{ shutdownEventListener.shutdown(message); });

class PublishEventHandler extends EventEmitter {}
const publishEventHandler = new PublishEventHandler();
publishEventHandler.on('publish', (message)=>{ mqttPublishEventListener.publish(message); });

class CassandraPublishEventHandler extends EventEmitter {}
const cassandraPublishEventHandler = new CassandraPublishEventHandler();
cassandraPublishEventHandler.on('publish', (message)=>{ cassandraPublisherListener.publish(message); });

class KafkaPublishEventHandler extends EventEmitter {}
const kafkaPublishEventHandler = new KafkaPublishEventHandler();
kafkaPublishEventHandler.on('publish', (message)=>{ kafkaPublisherListener.publish(message); });

class RabbitMQPublishEventHandler extends EventEmitter {}
const rabbitMQPublishEventHandler = new RabbitMQPublishEventHandler();
rabbitMQPublishEventHandler.on('publish', (message)=>{ rabbitMQPublisherListener.publish(message); });

// Trigger Events
function submitEvent(eventID, eventMessage){
	console.log(eventID);
	switch(eventID){
		case 0:{
			startupEventHandler.emit("startup",eventMessage);
		}break;
		
		case 1:{
			shutdownEventHandler.emit("shutdown",eventMessage);
		}break;
		
		case 2:{
			publishEventHandler.emit("publish",eventMessage);
		}break;
		
		case 3:{
			cassandraPublishEventHandler.emit("publish",eventMessage);
			kafkaPublishEventHandler.emit("publish",eventMessage);
			rabbitMQPublishEventHandler.emit("publish",eventMessage);
		}break;
		
		default:{
			console.log("Undefined Event");
		}
	}
}
  
module.exports.submitEvent = submitEvent;