function list(names) {  
    if (names.length == 1) {
        return names[0].name
    } else if (names.length == 0) {
        return ''
    } 

    let arr = names.map(item => {
        return item = item.name
      })
    
    arr.splice(arr.length - 2, 2, (arr[arr.length - 2] + ' & ' + arr[arr.length - 1]));

    return arr.join(', ');
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
