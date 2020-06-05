// Stores the active TCP connection object.
let connection;

//crashed if you input after you die, ok for now as the game is over anyways
const handleUserInput = function(data) {
  // console.log("Hello ", data);
  //exit if ctrl+c is pressed
  if (data === '\u0003') {
    process.exit();
  }

  switch (data) {
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  default:
      // console.log("none of the options");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  // console.log(stdin);
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  
  //read input
  stdin.on('data', handleUserInput);
  return stdin;

};

module.exports = {setupInput};