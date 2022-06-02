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