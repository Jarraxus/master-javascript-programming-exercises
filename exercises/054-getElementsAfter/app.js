function getElementsAfter(array, n) {
  let newArr = array.slice(n+1, array.length);
  return newArr
  
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']