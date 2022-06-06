const middle = function(array) {
  
  //get middle index's calculation
  let middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    // for array that only has 1 or two element in there;
    return [];

    //define result for array that will have 2 middle index
  } else if (array.length % 2 === 0) {

    return [array[middleIndex - 1], array[middleIndex]];
    //define result for array that can % 3 = 0
    //we need to + 1 because the we use the Math.floor to round down the number
  } else if (array.length % 3 === 0) {

    return [array[middleIndex]];
  }
};

module.exports = middle;