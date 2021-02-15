const myFunction = (a, b) => {
    let result = 'valid'

    for (let i = 0; i < a.length; i++) {
        if (b[i] === a[i]) {
            result = 'invalid'
            return result
        }
    }

    return result
}

console.log(myFunction('9876543', '3467985'))
console.log(myFunction('9876543', '7865439'))
console.log(myFunction('9876543', '8743956'))
console.log(myFunction('9876543', '3456789'))