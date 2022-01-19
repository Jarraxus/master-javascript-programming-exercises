var obj = {
  age: 45
};

function isPersonOldEnoughToDrinkAndDrive(person) {
  if (person.age < 21) {
    return false
  } else {
    return true
  }
}

var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false