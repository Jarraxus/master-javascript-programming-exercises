var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeEvenValues(obj) {
    for (const key in obj) {
        if (obj[key] % 2 == 0) {
                delete obj[key]
        }
    }
    return obj
}

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }