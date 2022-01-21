var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] == "number") { 
            delete obj[key]
        }
    }
    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }