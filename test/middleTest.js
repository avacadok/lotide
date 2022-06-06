const assert = require("chai").assert;
const middle = require("../middle");


//TEST CODE
// console.log(middle([1,2]));
// console.log(middle([1,2,3,4,5,6]));
// console.log(middle([1,2,3]));
// console.log(middle([1,2,3,4,5,6,7,8,9]));
// test out if my code works with the assertArraysEqual function
// assertArraysEqual(middle([1,2,3]), [2]);

describe("#middle", function() {
  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3, 4]);
  });

  it("return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [5] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });
});