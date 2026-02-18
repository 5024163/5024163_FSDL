// classes.js

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const s1 = new Student("Vishakha", 19);
s1.introduce();
