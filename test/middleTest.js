const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//TEST CODE
console.log(middle([1,2]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5,6,7,8,9]));
//test out if my code works with the assertArraysEqual function
assertArraysEqual(middle([1,2,3]), [2]);