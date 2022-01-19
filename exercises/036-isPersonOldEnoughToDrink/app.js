var obj = {
  age: 16

};
function isPersonOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false
  } else {
    return true
  }
}

var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false