function camelize(str) {

    let arr = str.split('-');

    let newArr = arr.map( (item, index) => {
        if(index != 0) {
            return item = item[0].toUpperCase() + item.slice(1)
        } else {
            return item
        }
    })

    return newArr.join('')

}

console.log(camelize("webkit-transition"));
