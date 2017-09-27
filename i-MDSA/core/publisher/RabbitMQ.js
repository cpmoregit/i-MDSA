/**
 * 
 * Rabbit MQ integration
 *
 */

var stompit = require("stompit");
var connectionDetails = require("/configuration/rabbitMQ.json");

stompit.connect(connectionDetails, function(error,client){
	
});