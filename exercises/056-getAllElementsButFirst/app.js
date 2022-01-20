function getAllElementsButFirst(array) {
  let newArr = array.slice(1, array.length);
  return newArr;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]