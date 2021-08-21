function longest(s1, s2) {
   return Array.from(new Set(s1 + s2)).sort().join('');
}


let a = "xyaabbbccccdefwew"
let b = "xxxxyyyyabklmopq"

console.log(longest(a, b));



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