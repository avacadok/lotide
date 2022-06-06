const head = require("../head");
const assertEqual = require("../assertEqual");

//test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([8, 9, 14, 6, 7]));