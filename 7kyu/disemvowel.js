function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');


  arr.forEach((element, index, array) => {
    element = element.toString().toLowerCase();
    for (const lett of vowels) {
        if(element.includes(lett)) {
          delete array[index];
        } 
    }
  });

  return arr.join('');
  
  }


text = 'HEllo, friend';
disemvowel(text)





// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of 
// the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return 
// a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" 
// would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.