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
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // console.log(keys1, keys2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  //only use for ..in to loop through array;
  for (let key of keys1) {

    //values = (object[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      return eqArrays(object1[key], object2[key])

    } else if (object1[key] !== object2[key]) {
      
      return false;
    }
    
  } return true; 
};

//not sure how to do this -.-
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false