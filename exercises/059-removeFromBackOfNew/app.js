function removeFromBackOfNew(arr) {
  let arr2 = [...arr]
  arr2.pop();
  return arr2;
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]