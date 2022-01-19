var obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false
  } else {
    return true
  }
}

var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true