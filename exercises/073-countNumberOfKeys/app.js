var obj = {
    a: 1,
    b: 2,
    c: 3
  };

function countNumberOfKeys(obj) {
    let count = 0;
    for (const key in obj) { 
              count += 1
        }
return count 
}

var output = countNumberOfKeys(obj);
console.log(output); // --> 3