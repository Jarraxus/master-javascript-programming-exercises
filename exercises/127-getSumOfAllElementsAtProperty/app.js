var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
        for (key in obj) {
          if (obj[key].length == 0 || typeof obj[key] !== "object" || obj[key] == null) {
          return 0;
        } else {
          return obj[key].reduce((previousValue, currentValue) => previousValue + currentValue)
        }
        } 
        return 0;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13