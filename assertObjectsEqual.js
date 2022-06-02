

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

const eqObjects = function(object1, object2) {
  //this function does not work on arrays inside objects
  //put keys into an array
  console.log(object1)
  console.log(object2)
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // console.log(keys1, keys2)
  if (keys1.length !== keys2.length) {
    
    return false;
  }
  //only use for ..in to loop through array;
  // so we can also do for(let key in keys1)maybe ... not too sure
  for (let key in object1) {
    
    //check in any key contain an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //compare both array's value
      
      return eqArrays(object1[key], object2[key]);
      
    } else if (object1[key] !== object2[key]) {

      return false;
    }
    
  } return true;
};

const assertObjectsEqual = function(x, y) {
const inspect = require('util').inspect;
  if (eqObjects(x, y)) {
   
    console.log(`✅✅✅Assertion Passed: ${inspect(x)} === ${inspect(y)}`);    
    
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(x)} !== ${inspect(y)}`);
    
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(eqObjects(ab,ba), true);
assertObjectsEqual(ab, ba);