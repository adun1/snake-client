const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //interpret as utf-8
  conn.setEncoding('utf-8');

  //recieive data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};



const play = function() {
  console.log('Connecting ...');
  connect();
};

play();