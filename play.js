const { connect } = require('./client.js');


// setTimeout(() => {
//   conn.write("Move: up");
// }, 1000)


// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //works only if pressed twice
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
