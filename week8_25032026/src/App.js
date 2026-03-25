import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div style={styles.app}>

        <header style={styles.header}>
          <h2>Math Quiz</h2>
          <nav>
            <Link to="/" style={styles.link}>Quiz</Link>
            <Link to="/result" style={styles.link}>Result</Link>
          </nav>
        </header>

        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Quiz setScore={setScore} />} />
            <Route path="/result" element={<Result score={score} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    fontFamily: "Arial",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh"
  },
  header: {
    background: "#ffffff",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd"
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#333"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px"
  }
};

export default App;