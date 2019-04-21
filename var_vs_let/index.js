// var catName = "Quincy";
// var quote;

// var catName = "Beau";

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
