const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObject = function(object1, object2) {
  //this function does not work on arrays inside objects
  //put keys into an array
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // console.log(keys1, keys2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  //only use for ..in to loop through array;
  for (let key in object1) {
    //check if keys2 includes all the key in keys
    // if (keys2.includes(key)){
    //check if the value inside object1 and object2
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //compare both array's value
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObject(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObject(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObject(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObject(cd, cd2), false); // => false

module.exports = eqObject;