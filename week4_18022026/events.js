// events.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log(`Hello ${name}, this is an event response!`);
    rl.close();
});
