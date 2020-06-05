// const net = require('net');
const {connect} = require('./client');

/**
 * Establishes connection with the game server
 */
const setupInput = function() {
  const stdin = process.stdin;
  // console.log(stdin);
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  
  //read input
  stdin.on('data', handleUserInput);
  return stdin;

};

const handleUserInput = function(data) {
  // console.log("Hello ", data);
  //exit if ctrl+c is pressed
  if (data === '\u0003') {
    process.exit();
  }
};

const play = function() {
  console.log('Connecting ...');
  const connection = connect();
  const stdInput = setupInput();
};

play();



// process.on('SIGINT', () => {
//   //connection.close();
//   // console.log("GoodBye");
//   process.exit();
// });