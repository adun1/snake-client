// const net = require('net');
const {connect} = require('./client');

/**
 * Establishes connection with the game server
 */


const play = function() {
  console.log('Connecting ...');
  connect();
};

play();