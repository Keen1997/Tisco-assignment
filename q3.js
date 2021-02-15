const hexToString = input => {
    const hex = input.replace(/\s/g, '')

    let string = ''
    for (let i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }
    return string
}

console.log(hexToString('48 65 6C 6C 6F 20 77 6F 72 6C 64 21'))
console.log(hexToString('43 6F 64 69 6E 47 61 6D 65 20 72 6F 63 6B 27 73'))
console.log(hexToString('54 68 65 20 48 69 74 63 68 68 69 6B 65 72 27 73 20 47 75 69 64 65 20 74 6F 20 74 68 65 20 47 61 6C 61 78 79 2E'))
console.log(hexToString('49 20 6c 6f 76 65 20 54 69 73 63 6f 20 42 61 6e 6b 20'))