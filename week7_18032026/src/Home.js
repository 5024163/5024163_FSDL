import React, { useRef } from "react";

function Home({ addNote }) {
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;

    if (value.trim() === "") {
      alert("Enter a note!");
      return;
    }

    addNote(value);
    inputRef.current.value = "";
  };

  return (
    <div style={styles.card}>
      <h3>Add Note</h3>

      <input
        ref={inputRef}
        placeholder="Enter your note"
        style={styles.input}
      />

      <button onClick={handleAdd} style={styles.button}>
        Add
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "350px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    textAlign: "center"
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "15px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px",
    background: "#2d89ef",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Home;