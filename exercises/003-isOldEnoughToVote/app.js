function isOldEnoughToVote(age) {
  if (age < 18) {
    return false
  } else {
    return true
  }
}

var output = isOldEnoughToVote(22);
console.log(output); // --> true