const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = map;