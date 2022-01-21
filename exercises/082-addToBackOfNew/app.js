var input = [1, 2];

function addToBackOfNew(arr, element) {
    let newarr = arr.concat(element);
    return newarr;
}


var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

