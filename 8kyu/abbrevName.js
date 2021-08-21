function abbrevName(name){

   arr = name.split(' ');
   str = '';

    arr.forEach(element => {
        str += '.' + element.slice(0,1);
    });

    return str.slice(1).toUpperCase();
}

abbrevName('Sam Harris');


// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.