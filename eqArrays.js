const assertEqual = function(actual, expected) {

  if (actual !== expected) {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`)

      //can also use console.assert()
      //console.assert(actual === expected,( actual + " !== " +  expected))
      //msg will be printed if actual !== expected

  } else {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
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

// TEST CODE
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2"], ["1", "2", "3"])); // => false
console.log(eqArrays(["1", "2", 3], ["1", "2", "3"])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


