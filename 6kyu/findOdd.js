// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(nambers) {

    let obj = {};

    nambers.map((item) => {
        if(obj[item]) {
            obj[item] ++
        } else obj[item] = 1
    })

    for (const key in obj) {
        if(obj[key] % 2) {
            return +key
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
