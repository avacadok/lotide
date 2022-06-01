const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);

    //can also use console.assert()
    //console.assert(actual === expected,( actual + " !== " +  expected))
    //msg will be printed if actual !== expected

  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }

};


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