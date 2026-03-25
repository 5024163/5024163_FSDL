import React from "react";
import { Link } from "react-router-dom";

function Result({ score }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Your Score</h2>
        <h1>{score}</h1>

        <Link to="/" style={styles.button}>
          Restart Quiz
        </Link>
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
    width: "300px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#2d89ef",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default Result;