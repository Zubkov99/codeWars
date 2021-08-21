function longest(s1, s2) {
   let result =  [...new Set(s1+s2)].sort().join('');

return result    
    
}


let a = "xyaabbbccccdefwew"
let b = "xxxxyyyyabklmopq"

longest(a, b);



// Long solution

// function longest(s1, s2) {
//     let arr = s1.split('') ;
//     let arr2 = s2.split('');
//     let arr3 = arr.concat(arr2).sort();

//     let result = '';

//     arr3.map(function(item) {
        
//         if(!result.includes(item)) {
//             result += item;
//         }
//       })
// return result
// }