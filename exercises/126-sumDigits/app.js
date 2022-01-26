function sumDigits(num) {
    let string = num.toString();
    let number = 0;
        for (let index = 0; index < string.length; index++) {
        if (string[index] == "-") {
            continue;
        } else if (string[index - 1] == "-") {
            number += Number(string[index - 1] + string[index])
        } else {
            number += Number(string[index]);
        }
            }
    return number;
}
var output = sumDigits(316);
console.log(output); // --> 4