import React from "react";

function StudentDisplay({ students, deleteStudent }) {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",   // centers the grid
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        justifyItems: "center" // centers each card
      }}
    >
      {students.map((student, index) => {
        const initials = student.name.charAt(0).toUpperCase();

        return (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#3498db",
                color: "white",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px"
              }}
            >
              {initials}
            </div>

            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>{student.course}</p>

            <button
              onClick={() => deleteStudent(index)}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default StudentDisplay;