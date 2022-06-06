const assertEqual = require("./assertEqual");

const countLetters = function(strings) {

  let output = {};
  // similar to countOnly, we will loop through all the str/key in the strings
  for (let str of strings) {
    //if the word is not empty; if it has letter
    if (str !== " ") {
      //check if the str is already in the output or not
      if (output[str]) {
        output[str] += 1;
      } else {
        output[str] = 1;
      }
    }
  } return output;
};

console.log(countLetters("Coding is so tough but so cooooool"));

module.exports = countLetters;