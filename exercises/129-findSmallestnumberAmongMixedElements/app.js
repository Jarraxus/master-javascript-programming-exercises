function findSmallestNumberAmongMixedElements(arr) {
  let tempnumber = 0;
  for (let index = 0; index < arr.length; index++) {
      if (typeof arr[index] == "number") {
          if (tempnumber == 0) {
              tempnumber = arr[index];
          } else if (tempnumber > arr[index]) {
              tempnumber = arr[index];
          } else {
              continue
          }
      }
  }
  return tempnumber;
}


var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4