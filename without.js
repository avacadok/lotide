const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//create function that remove msg for original array
const without = function(oldArr, removeArr) {
  
  let newArr = [];
  //loop through all the element in the array
  for (let i = 0; i < oldArr.length; i++) {
    
    //check if the oldArr does not includes the removeArr[i]
    if (!oldArr.includes(removeArr[i])) {
      //push the oldArr[i] to the newArr if so
      newArr.push(oldArr[i]);

    }
  } return newArr;

};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;