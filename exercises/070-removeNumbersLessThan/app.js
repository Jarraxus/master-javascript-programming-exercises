var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    for (const key in obj) {
        if (typeof obj[key] == "number") {
            if (obj[key] < num)
                delete obj[key]
        }
    }
    return obj
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }