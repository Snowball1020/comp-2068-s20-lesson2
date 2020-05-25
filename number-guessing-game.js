console.clear()

/*
    Author : Yuki
    Objective: number guessing game
*/

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
})

//generate rundom number
const number = Math.round(Math.random() * (10 - 1) + 1);
console.log(number);

// func
const guess = async guess => {
    return new Promise((resolve,reject) => {
        rl.question("Guess the number btw 1-10 \n\n", answer => {
            return resolve(number == answer);
        })
    })
}

// set initial value
let cont = false;

// calling the func
(async () => {
    while (!cont) {
        cont = await guess();
        if(!cont) console.error("You were wrong")
    }

    console.log("Congrats");
    rl.close();
})();

