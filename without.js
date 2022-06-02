// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {

  //ensure both arrs have the same length before we starts, if not return false
  if (arr1.length !== arr2.length) {

    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //ensure all the element in the array are the same
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;

};
//create function to compare if two array are the same based on the eqArray
const assertArraysEqual = function(arr1, arr2) {
  //refer to eqArray and console log the statement
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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
