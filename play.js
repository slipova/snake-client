const { connect } = require('./client.js');
const { setupInput } = require('./input.js')

console.log("Connecting ...");

let conn = connect();
setupInput(conn);


// Events when keys are pressed

// const handleUserInput = function() {
//   stdin.on('data', (key) => {
//     if (key === '\u0003') {
//       process.exit();
//     }
//   });
// };