function isOldEnoughToDrive(age) {
  if (age < 16) {
    return false
  } else {
    return true
  }
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true