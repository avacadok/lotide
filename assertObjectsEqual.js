const eqObject = require("./eqObject");

const assertObjectsEqual = function(x, y) {
//add this function to use external library function so program can read object
  const inspect = require('util').inspect;
  if (eqObject(x, y)) {
   
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
assertObjectsEqual(abc, ba);

module.exports = assertObjectsEqual;