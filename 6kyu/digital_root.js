// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

function digital_root(n) {

        let count = 0;

        n.toString()
        .split('')
        .forEach(item => {
            count += +item;
        });

        if(count < 10) {
            return count
        } 

        if(count >= 10) {
            return digital_root(count)
        }    
}

digital_root(493193)