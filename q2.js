const myFunction = num => {
    let sum = 0
    for (let i = 1; i <= num - 1; i++) {
        if (!(num % i)) {
            sum += i
        }
    }
    
    if (num < sum) return 'abundant'
    else if (num === sum) return 'perfect'
    else if (num > sum) return 'deficient'
}

console.log(myFunction(15));
console.log(myFunction(18));
console.log(myFunction(6));
