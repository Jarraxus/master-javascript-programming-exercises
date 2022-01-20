function removeFromFrontOfNew(arr) {
    let arr2 = [...arr]
  arr2.shift();
  return arr2;
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]