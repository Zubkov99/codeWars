// This kata is designed to test your ability to extend the functionality of built-in classes. 
// In this case, we want you to extend the built-in Array class with the following methods: 
// square(), cube(), average(), sum(), even() and odd().
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must 
// return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

Array.prototype.square = function () {return this.map( (n) => n*n )};
Array.prototype.cube = function() {
    return this.map( (n) => n**3 )
}

Array.prototype.average = function() {
    let result = 0;
     this.map( (n) => {
        result += n;
    })
    return result / this.length
}

Array.prototype.sum = function() {
    let result = 0;
     this.map ( (n) => {
        result +=n
    })
    return result
}

Array.prototype.even = function() {
      return this.filter((n) => {
        if (n % 2 == 0) {
             return n
        }
    })
}

Array.prototype.odd = function() {
    return this.filter( (n) => {
        if(n % 2) {
            return n
        }
    })
}

console.log([1,2,3].square());
console.log([1,2,3].cube());
console.log([1,2,3,4,5].average());
console.log([1,2,3,4,5].sum());
console.log([1,2,3,4,5].even());
console.log([1,2,3,4,5].odd());