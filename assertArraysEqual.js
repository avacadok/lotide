// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {

  //ensure both arrs have the same length before we starts, if not return false
  if (arr1.length !== arr2.length) {

    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //ensure all the element in the array are the same;
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

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);

