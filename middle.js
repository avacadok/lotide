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

const middle = function(array) {
  
  //get middle index's calculation
  let middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    // for array that only has 1 or two element in there;
    return [];

    //define result for array that will have 2 middle index
  } else if (array.length % 2 === 0) {

    return [middleIndex, middleIndex + 1];
    //define result for array that can % 3 = 0
    //we need to + 1 because the we use the Math.floor to round down the number
  } else if (array.length % 3 === 0) {

    return [middleIndex + 1];
  }
};

console.log(middle([1,2]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5,6,7,8,9]));
//test out if my code works with the assertArraysEqual function
assertArraysEqual(middle([1,2,3]), [2]);