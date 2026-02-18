// objects.js

const student = {
    name: "Vishakha",
    age: 20,
    course: "B.Tech",
    
    display() {
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
};

console.log(student.name);
student.display();
