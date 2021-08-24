function high(x) {
    let arr = x.split(' ');

    let splitChar = arr.map(element => {
        return element.split('');
    })

    let charValuу = splitChar.map( element => {
        let count = 0;
        element.forEach(element => {
            count += element.toUpperCase().charCodeAt() - 64;
        })
        return count
    })
    
    let largest = 0;
    let largestIndex;
    
    for (let i = 0; i < charValuу.length; i++) {
        if (charValuу[i] > largest) {
            largest = charValuу[i];
            largestIndex = i;
        }
    }

    return arr[largestIndex]
}


let str = 'dima any kek lol';

console.log(high(str));

// We have a string. We have to filter out the string and return the word with the greatest sum of characters.
