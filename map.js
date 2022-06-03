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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
  
    results.push(callback(item));
    
  }
  return results;
  
};

const results1 = map(words, word => word.slice(0, -1));
console.log(results1);

assertArraysEqual(results1,[ 'groun', 'contro', 't', 'majo', 'to' ]);