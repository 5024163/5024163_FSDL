import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentDisplay from "./StudentDisplay";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2f5f9",
        fontFamily: "Arial",
        padding: "30px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center"
        }}
      >
        <h1>Student Card Manager</h1>

        <p style={{ color: "gray" }}>
          Total Students: {students.length}
        </p>

        <StudentForm addStudent={addStudent} />

        <StudentDisplay
          students={students}
          deleteStudent={deleteStudent}
        />
      </div>
    </div>
  );
}

export default App;