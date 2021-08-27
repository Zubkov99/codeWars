// TASK
// Your task is to write function findSum.
// Upto and including n, this function will return the 
// sum of all multiples of 3 and 5.


function findSum(n) {

    let count = 0;

    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            count += i;
        }
    }

    return count

}





findSum(10);