/**
 * 
 * Device Communication
 *
 */

const CREATE_DEVICE_DETAILS_SCHEMA="CREATE KEYSPACE DEVICE_DETAILS with Replication = { 'class':'SimpleStrategy',replication_factor:1}";
const CREATE_DEVICE_STATUS_TABLE="CREATE TABLE DEVICE_STATUS (messageID text PRIMARY KEY, sourceID text, loggedat time, message text)";
