function isSameLength(val1, val2){
    if (val1.length == val2.length) {
        return true
    } else {
        return false
    }
}

var output = isSameLength('words', 'super');
console.log(output); // --> true