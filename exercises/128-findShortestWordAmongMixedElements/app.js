function findShortestWordAmongMixedElements(arr) {
    let tempstring = "";
    for (let index = 0; index < arr.length; index++) {
        if (typeof arr[index] == "string") {
            if (tempstring == "") {
                tempstring = arr[index];
            } else if (tempstring.length > arr[index].length) {
                tempstring = arr[index];
            } else {
                continue
            }
        }
    }
    return tempstring;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'