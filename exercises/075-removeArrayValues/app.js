var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }

function removeArrayValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] == "object") {
            delete obj[key]
        }
    }
    return obj
}

removeArrayValues(obj);
console.log(obj); // --> { b: 2 }