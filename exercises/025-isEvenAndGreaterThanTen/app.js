function isEvenAndGreaterThanTen(var1){
    if (var1 % 2 == 0 && var1 > 10) {
        return true
    } else {
        return false
    }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false