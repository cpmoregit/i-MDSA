/**
 * http://usejsdoc.org/
 */

class RabbitMQConnectionObject{
	
	constructor (rabbitMQconnectionDetails, ttl){
		this.connectionDetails = rabbitMQconnectionDetails;
		this.timeOutTime = now + ttlConnection;
	}
	
	get Connection(){
		this.connection = "";
		var rabbitMQConnectionDetails=JSON.parse(this.connectionDetails);
		url = rabbitMQConnectionDetails.url;
		// Create Rabbit MQ Connection
		
		this.createdTime;
	}
	
	get isValid(){
		var returnValue = false;
		if(this.createdTime !== null){
			
			//get Current time
			// if Current Time > time out time is 
			deleteConnection();
			
		}else{
			returnValue = true;
		}
		return returnValue;
	}
	
	deleteConnection(){
		
	}
}
