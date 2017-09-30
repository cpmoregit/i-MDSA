/**
 *
 * Controller
 * 
 */

var deviceCommunication = require("../deviceIntegration/deviceCommunication");
var eventPublisher = require("../eventsHandler/localEventHandler");
var eventID = require("../eventsHandler/EventID");

function deviceStatusUpdate(){
	eventPublisher.submitEvent(3,"Test Multicast Message");
}
	
setInterval(deviceStatusUpdate, 5000, 'deviceStatusUpdate');