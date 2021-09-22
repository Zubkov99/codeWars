// Modify the kebabize function so that it converts a
// camel case string into a kebab case.
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps

function kebabize(str) {

    str = str.replace(/\d/g,'');

    let regexp = new RegExp('[A-Z]','g')
    
    return str.split('')
    .map( (item, index)=> {
        if (index == 0) {
            return item.toLowerCase()
        }
        if(item.match(regexp)) {
            return '-' + item.toLowerCase();
        } return item
    })
    .join('')
}

console.log(kebabize('CamelsHave33HuMps'));

