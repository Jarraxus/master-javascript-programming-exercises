var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

function removeStringValuesLongerThan(num, obj) {
    for (const key in obj) {
        if (typeof obj[key] == "string") {
            if (obj[key].length > num)
                delete obj[key]
        }
    }
    return obj

}


removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }