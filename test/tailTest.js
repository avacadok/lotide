const assert = require("chai").assert;
const tail = require("../tail.js");


//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs", "People"]);
// assertEqual(result, ["Lighthouse", "Labs", "People"]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs", "coding"]), ["Lighthouse", "Labs", "coding"]);
// assertEqual(result.length, ); // ensure we get back three elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", function() {
  it("return 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("return 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[1], "Labs");
  });

  it("return 3 for result.length", () => {
    assert.strictEqual(result[1], "Labs");
  });

  //Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, 
  //which will not work for comparing objects and arrays
  it('return [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("return ['Ligthouse', 'Labs', 'People'] for ['Hello','Ligthouse', 'Labs', 'People']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs", "People"]), ["Lighthouse", "Labs", "People"]);
  });
});