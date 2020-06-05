const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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
  });


  return conn;
};

module.exports = {connect};