import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <BrowserRouter>
      <div style={styles.app}>

        <header style={styles.header}>
          <h2>Notes App</h2>
          <nav>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/notes" style={styles.link}>Notes</Link>
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home addNote={addNote} />} />
            <Route path="/notes" element={<Notes notes={notes} />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh"
  },
  header: {
    backgroundColor: "#ffffff",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd"
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  }
};

export default App;