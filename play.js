// const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');
/**
 * Establishes connection with the game server
 */

const play = function() {
  console.log('Connecting ...');
  const connection = connect();
  setupInput(connection);
};

play();