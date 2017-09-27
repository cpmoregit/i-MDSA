/**
 * 
 * RabbitMQ Connection Pool
 *
 */

var rabbitmqConnectionQueue = [];

function intialize(){
	
}

function releaseALL(){
	
}

function checkIn(connectionObject){
	connectionQueue.push(connectionObject);
}

function checkout(){
	// Check is Object is valid
	// If not create New Object
	return connectionQueue.shift();
}