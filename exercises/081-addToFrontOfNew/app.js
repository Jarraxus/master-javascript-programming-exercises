var input = [1, 2];

function addToFrontOfNew(arr, element) {
    const newarr = [element].concat(arr);
    return newarr;
}

var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

