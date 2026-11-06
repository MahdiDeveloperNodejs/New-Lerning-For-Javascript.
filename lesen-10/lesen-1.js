const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    outout: process.stdout

})
rl.question("How old are you?", (age) => {
    age = Number(age)
    if (age >= 18) {
        console.log(`You are an adult!`);
    } else {
        console.log(`You are under 18!`);
    }
    rl.close()
})
console.log("OK");