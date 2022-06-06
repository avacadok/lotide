const assertEqual = require("./assertEqual");

const countOnly = function(allItems, itemsToCount) {
  let result = {};

  for (let item of allItems) {
    //to check what is on item
    console.log(item);
    // if key/item on allitems exist in itemsToCount
    if (itemsToCount[item]) {
      //check result[item] exist
      if (result[item]) {
        //add 1 if the key exist
        result[item] += 1;
      } else {
        //otherwise key = 1
        result[item] = 1;
      }
    }
  } console.log(result);
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;