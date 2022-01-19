var obj = {
  age: 19
};

function isPersonOldEnoughToVote(person) {
  if (person.age < 18) {
    return false
  } else {
    return true
  }
}

var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true