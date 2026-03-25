import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz({ setScore }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");

  const questions = [
    { q: "5 + 3 = ?", options: ["6", "8", "10"], answer: "8" },
    { q: "10 - 4 = ?", options: ["5", "6", "7"], answer: "6" },
    { q: "3 × 3 = ?", options: ["6", "9", "12"], answer: "9" }
  ];

  const handleNext = () => {
    if (selected === "") {
      alert("Select an option");
      return;
    }

    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setSelected("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h3>Question {current + 1} of {questions.length}</h3>
        <p style={styles.question}>{questions[current].q}</p>

        {questions[current].options.map((opt, index) => (
          <label key={index} style={styles.option}>
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={(e) => setSelected(e.target.value)}
            />
            {opt}
          </label>
        ))}

        <button onClick={handleNext} style={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px"
  },
  card: {
    width: "400px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  question: {
    fontSize: "18px",
    margin: "15px 0"
  },
  option: {
    display: "block",
    margin: "10px 0",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    cursor: "pointer"
  },
  button: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    background: "#2d89ef",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Quiz;