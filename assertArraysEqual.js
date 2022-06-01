// FUNCTION IMPLEMENTATION

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

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);