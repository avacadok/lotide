const tail = require("../tail.js");
const assertEqual = require("../assertEqual");

//TEST CODE
// JavaScript doesn't allow the use of === or == to compare two arrays.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse", "Labs", "coding"]), ["Lighthouse", "Labs", "coding"]);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"