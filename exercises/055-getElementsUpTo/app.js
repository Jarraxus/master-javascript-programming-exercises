function getElementsUpTo(array, n) {
  let newArr = array.slice(0, n);
  return newArr;
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']