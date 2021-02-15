const myFunction = num => {
    let output = num.toString()
    let currentOutput = num

    while (currentOutput !== 1) {
        if (currentOutput % 2 === 0) {
            let newOutput = currentOutput / 2

            currentOutput = newOutput
            output = output + ` ${newOutput.toString()}`
        } else {
            let newOutput = currentOutput * 3 + 1

            currentOutput = newOutput
            output = output + ` ${newOutput.toString()}`
        }
    }

    return output
}

console.log(myFunction(5))