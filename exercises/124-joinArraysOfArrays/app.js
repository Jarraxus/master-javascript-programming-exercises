function joinArrayOfArrays(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr[index].length; index2++) {
        newArr.push(arr[index][index2]);
    }
  }
  return newArr;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

// OPTIONAL METHOD
// function joinArrayOfArrays(arr) {
//   let newArr = arr[0].concat(arr[1], arr[2]);
//   return newArr;
// }