function capitalize(s) {
    let firstStr = '';
    let secondStr = '';

    for(let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            firstStr += s[i].toUpperCase()
        } else firstStr += s[i];

        if(i % 2 == 1) {
            secondStr += s[i].toUpperCase()
        } else secondStr += s[i]
    }

    let arr = [];
    arr.push(firstStr, secondStr);
    return arr


}

console.log(capitalize('abcdef'));



