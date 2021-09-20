// You will also have to create an instance method named howMany() (or how_many()).
// The method takes an array of people who have listened to the song that day. 
// The output should be how many new listeners the song gained on that day out of all listeners. 
// Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

class Song {
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
        this.fans = [];
    };

    howMany(arr) {
        let newArr = arr.map( item => item.toLowerCase());
        let result = [];
        newArr.forEach(element => {
            if(!this.fans.includes(element)){
                this.fans.push(element);
                result.push(element)
            } 
        });

        return result.length
    }
}

const test = new Song('Morgenshtern', 'Blue');
test.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])
console.log(test.howMany(['JoHn', 'Luke', 'AmAndA']));