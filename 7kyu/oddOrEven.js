function oddOrEven(array) {
    let result = 0;
    array.forEach(element => {
        result += element;
    });

    if(result % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
    
}

oddOrEven([1,2,3]);

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).