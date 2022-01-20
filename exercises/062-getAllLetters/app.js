function getAllLetters(str) {
    let array = [];
    for (let index = 0; index < str.length; index++) {
         array.push(str[index]);      
    }
    return array;
}


var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']