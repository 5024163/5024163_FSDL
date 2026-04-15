const Student = require("../models/Student");

// CREATE
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (err) {
        res.status(500).json(err);
    }
};

// READ
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json(err);
    }
};