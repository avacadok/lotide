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

const findKeyByValue = function(movies, name) {
  // set output to undefined in case name does not match with any movies
  let result = undefined;
  //console.log("name", name);
  for (let type in movies) {

    //check if name contains any key of the movies
    const movieName = movies[type];

    //check variable with console.log
    //console.log("movie name:", movieName);
    if (name === movieName) {
      
      result = type;

      return result;
    }
  }

};



const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);