function count(string) {

let obj = {}

for(let i = 0; i < string.length; i++){
    if(obj[string[i]]) {
        obj[string[i]] ++;
    } else obj[string[i]] = 1;
    

}

return obj

}

console.log(count("abaqef[jooqrjf;qremfiperwmfipowerjmfiopexccc"));
