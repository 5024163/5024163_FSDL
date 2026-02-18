// ===============================
// Week 04 - All Concepts Demo
// ===============================

// Function triggered by event (Button Click)
function processData() {

    // 1️⃣ VARIABLES
    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);
    const bonus = 5;

    // 2️⃣ OPERATORS
    let totalMarks = marks + bonus;

    // 3️⃣ CONDITIONS
    let grade;
    if (totalMarks >= 90) {
        grade = "A";
    } else if (totalMarks >= 75) {
        grade = "B";
    } else if (totalMarks >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    // 4️⃣ LOOPS
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }

    // 5️⃣ FUNCTIONS
    const greet = (student) => {
        return `Hello ${student}, welcome!`;
    };

    // 6️⃣ OBJECT
    const student = {
        name: name,
        marks: totalMarks,
        display() {
            return `Student ${this.name} scored ${this.marks} marks.`;
        }
    };

    // 7️⃣ CLASS
    class Result {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
        }

        showResult() {
            return `${this.name}'s Grade: ${this.grade}`;
        }
    }

    let resultObj = new Result(name, grade);

    // 8️⃣ EVENT (Button Click event already used)

    // Display Output
    document.getElementById("output").innerHTML = `
        <p><strong>Greeting:</strong> ${greet(name)}</p>
        <p><strong>Total Marks (with bonus):</strong> ${totalMarks}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Loop Output (1-5):</strong> ${numbers}</p>
        <p><strong>Object Output:</strong> ${student.display()}</p>
        <p><strong>Class Output:</strong> ${resultObj.showResult()}</p>
    `;
}
