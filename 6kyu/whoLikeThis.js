// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 

function likes(names) {

    const countOtherPeopels = names.length - 1;
 
    if(names == false) return "no one likes this"

    let result = names.map( (item, index, arr) => {

        if(names.length == 1) {
            return item = `${item} likes this`
        } else

        if(names.length <= 3 && names.length > 1) {
            if(index === countOtherPeopels) {
                return item = `and ${item} like this`
            } else if(index === 0 && arr.length === 2) {
                return item
            } else if(index === 0 && arr.length > 2){
                return item + ','
            }
            else if (index === 1 && arr.length == 2) {
                return item + ','
            } else return item
        }

        if(names.length > 3) {
            arr.splice(2,countOtherPeopels, `and ${countOtherPeopels - 1} others like this`);
            return item + ','
        }
    })
    return result.join(' ').trim()

    // Yeah, my solution sucks
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));









// likes(['Dima', 'Nik', 'Stiv'])
