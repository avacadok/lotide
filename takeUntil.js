const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  let output = [];
  //loop through each element of the array
  for (let item of array) {
    //return each element until the element match the condition of the anonymous arrow function

    if (callback(item) === true) {
      //return output when item meet callback condition
      return output;
    } else {
      //push item to the output if it doesn't meet the callback condition
      output.push(item);
    }
  } return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;