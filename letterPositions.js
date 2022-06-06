const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] !== " ") {
      //see if the letter exist in the array
      if (results[sentence[i]]) {
        //if the letter already exist in the array we will push the new index to the array --> i: [1, 11]
        //do not do push.([i]) that means that we would add another array inside the array --> i: [1, [11]]
        results[sentence[i]].push(i);

      } else {

        results[sentence[i]] = [i];
      }
    }
  } return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });

module.exports = letterPositions;