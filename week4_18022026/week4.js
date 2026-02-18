// ===============================
// Week 04 - ES6 Implementation
// ===============================

// 1️⃣ VARIABLES
let studentName = "Vishakha";
let marks = 85;
const course = "Computer Science";

console.log("Student Name:", studentName);
console.log("Course:", course);


// 2️⃣ OPERATORS
let bonus = 5;
let totalMarks = marks + bonus;   // arithmetic operator

console.log("Total Marks (after bonus):", totalMarks);

console.log("Is totalMarks > 90?", totalMarks > 90);  // comparison operator
console.log("Logical AND example:", totalMarks > 50 && totalMarks < 100);


// 3️⃣ CONDITIONS
if (totalMarks >= 90) {
    console.log("Grade: A");
} else if (totalMarks >= 75) {
    console.log("Grade: B");
} else if (totalMarks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}


// 4️⃣ LOOPS
console.log("\nCounting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 5️⃣ FUNCTIONS
function greet(name) {
    return `Hello ${name}, welcome to ES6 demo!`;
}

console.log(greet(studentName));

// Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply 4 * 5 =", multiply(4, 5));


// 6️⃣ OBJECTS
const student = {
    name: studentName,
    marks: totalMarks,
    display() {
        console.log(`Student ${this.name} scored ${this.marks} marks.`);
    }
};

student.display();


// 7️⃣ CLASSES
class Result {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    showResult() {
        console.log(`${this.name}'s Final Marks: ${this.marks}`);
    }
}

const result1 = new Result(studentName, totalMarks);
result1.showResult();


// 8️⃣ EVENTS (Node.js Input Event)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nEnter your city: ", (city) => {
    console.log(`Hello ${studentName} from ${city}!`);
    rl.close();
});
