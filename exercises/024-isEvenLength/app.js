function isEvenLength(var1) {
    if (var1.length % 2 == 0) {
        return true
    } else {
        return false
    }
}

var output = isEvenLength('wow');
console.log(output); // --> false