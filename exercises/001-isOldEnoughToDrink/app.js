function isOldEnoughToDrink(age){
    if (age < 21) {
        return false
    } else {
        return true
    }	
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true