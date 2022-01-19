function isOddLength(var1){
    if (var1.length % 2 == 0) {
        return false
    } else {
        return true
    }
}

var output = isOddLength('special');
console.log(output); // --> true