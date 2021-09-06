function multiples(num) {
    if(num < 0) return 0
    
    let result = 0
    for(let i = 1; i < num; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    
    return result
}


multiples(10)