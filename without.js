
//create function to compare if two array are the same
const assertArraysEqual = function(arr1, arr2) {

  //compare the length of the arrays are the same; if not we can console.log false msg here
  if (arr1.length !== arr2.length) {

    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
    //use return the stop code keep running after msg logged
  }

  //use for loop the loop through all the element in the arrays and compare all the element for both array
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }

  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  return true;
};

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
