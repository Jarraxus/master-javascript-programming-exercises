var obj = {
  key: [1, 2, 3, 4]
};


function getProductOfAllElementsAtProperty(obj, key) {
  for (key in obj) {
    if (obj[key].length == 0 || typeof obj[key] !== "object" || obj[key] == null) {
    return 0;
  } else {
    return obj[key].reduce((previousValue, currentValue) => previousValue * currentValue)
  }
  } 
  return 0;
  
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24