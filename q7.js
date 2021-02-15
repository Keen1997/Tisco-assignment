const myFunction = (num, sentence) => {
    let arr = []

    for (let i = 0; i < num; i++) {
        arr[i] = []
    }

    let currentBlock = 0

    for (let i = 0; i < sentence.length; i++) {
        arr[currentBlock].push(sentence[i])

        if (currentBlock === num - 1) {
            currentBlock = 0
        } else {
            currentBlock++
        }
    }

    for (let i = 0; i < num; i++) {
        arr[i] = arr[i].join("")
    }

    if (num > 1) arr.push("x")

    return (arr.join(" "))
}

console.log(myFunction(3, 'Is text important ?'))
console.log(myFunction(5, 'Pay_attention_to_space'))
console.log(myFunction(1, 'Une chocolatine !'))