function filterRange(arr, num1, num2) {

    return arr.filter( item => item >= num1 && item <= num2)
}

console.log(filterRange([1,2,3,4,5,6,7], 3,6));

