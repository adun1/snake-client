const net = require('net');
const {IP, PORT} = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret as utf-8
  conn.setEncoding('utf-8');

  //check for successful connection
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BRI");
  });
  
  
  //recieive data from server
  conn.on('data', (data) => {
    console.log(data);
    // console.log("#Hello");
  });


  return conn;
};

module.exports = {connect};