const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);

    //can also use console.assert()
    //console.assert(actual === expected,( actual + " !== " +  expected))
    //msg will be printed if actual !== expected

  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }

};

const findKey = function(object1, callback) {
  let output;

  for (let key in object1) {
    
    let val = object1[key];

    if (callback(val)) {

      output = key;
      return output;
    }
    
  } return output;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");// => "noma"


assertEqual(findKey({
  "Avacadok": { likes: 9 },
  "Ava":   { likes: 1 },
  "Snowie":      { likes: 100 },
  "Brandon":   { likes: 99 },
  "Maddy":       { likes: 95 },
  "Eddie":  { likes: 50 }
}, x => x.likes === 100), "Snowie");

assertEqual(findKey({
  "Ramen": { favour: 90 },
  "Pho":   { favour: 101 },
  "Apple":      { favour: 150 },
  "Orange":   { favour: 99 },
  "Water":       { favour: 300 },
  "CupNoodle":  { favour: 200 }
}, x => x.favour === 100), undefined);
