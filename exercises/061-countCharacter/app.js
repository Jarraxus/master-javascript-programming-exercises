function countCharacter(str, char) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == char) {
            count += 1;
        }     
    }
    return count;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3