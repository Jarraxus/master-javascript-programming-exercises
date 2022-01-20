function getAllWords(str) {
    let newArr = [];
    let newStr = '';
    for (let index = 0; index < str.length; index++) {
        if (str[index] == ' ') {
            newArr.push(newStr);
            newStr = '';
        } else if (index == str.length-1) {
            newStr += str[index];
            newArr.push(newStr);
        }
        else  {
            newStr += str[index];
        }
        
    }
    return newArr;
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
