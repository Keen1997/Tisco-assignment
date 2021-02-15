const myFunction = input => {
    let count = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i - 1] === "/" && input[i] === "\\") count++
    }

    return count
}

console.log(myFunction("//\\\\//\\\\\\"))