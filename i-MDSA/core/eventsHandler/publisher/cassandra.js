/**
 * 
 * Submit Message to Cassandra database
 *
 */

var cassandra = require("cassandra-driver");
var connectionDetails = require("../../../configuration/cassandra.json");

function publishMessage(deviceID, message){
	
	var query = "INSERT INTO (deviceID,date,message) values(?,?,?)";
	
	const params = [ deviceID, new Date(), message ];
	
	client.execute( query, params, {prepare:true}, function (err){
		assert.ifError(err);	
		}
	);

}

module.exports.publishMessage = publishMessage;