//** VAR **//

// var catName = "Quincy";
// var quote;
// var catName = "Beau"; // will not throw error even though variable already declared

//** LET **//

let catName = "Quincy";
let quote;
// let catName = "Beau"; // will throw an error bc declaring variable twice
catName = "Beau"; // reassigning will not throw error

function catTalk() {
  "use strict"; // enables strict mode, catches some mistakes re: declarations
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();

//** COMPARING SCOPES **//

function checkScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();
