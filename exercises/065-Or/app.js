function or(expression1, expression2) {
  if (expression1 && !expression2) {
    return true;
  }
}

var output = or(true, false);
console.log(output); // --> true;