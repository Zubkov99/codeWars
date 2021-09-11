// Write a function that accepts an array of 10 integers 
// (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
    let str = numbers.join('');

    return '(' + str.slice(0,3) + ')' + ' ' + str.slice(3,6) + '-' + str.slice(6);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
