function accum(s) {

    let arr = s.split('');

    let str = '';

    arr.forEach(function(item, index) {
        item = item.toString().toLowerCase()
       str = str + item[0].toUpperCase() + item.repeat(index) + '-';
      })

      return str.slice(0, str.length - 1)
}


let text = "abCsdf";
accum(text);



// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

