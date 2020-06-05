const handleUserInput = function(data) {
  // console.log("Hello ", data);
  //exit if ctrl+c is pressed
  if (data === '\u0003') {
    process.exit();
  }
};

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

module.exports = {setupInput};