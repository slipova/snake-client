const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //works only if any key is pressed before
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


module.exports = { setupInput };