var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeOddValues(obj) {
    for (const key in obj) {
        if (obj[key] % 2 !== 0) {
            delete obj[key]
        }
    }
    return obj
}

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }