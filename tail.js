// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`)

      //can also use console.assert()
      //console.assert(actual === expected,( actual + " !== " +  expected))
      //msg will be printed if actual !== expected

  } else {
      console.log(`Assertion Passed: ${actual} === ${expected}`)
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 8);
assertEqual("Snowie is sleeping", "Snowie is sleeping");


let tail = function (arrs) {
  return arrs.slice(1);
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

