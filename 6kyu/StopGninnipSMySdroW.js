// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed 
// (like the name of this kata).


function spinWords(string) {

    let result = string.split(' ')
    .map( item => {

        if(item.length >= 5) {
            return item.split('').reverse().join('')
        } return item
    })
    .join(' ')

 return result

}
console.log(spinWords('This is another test'));
