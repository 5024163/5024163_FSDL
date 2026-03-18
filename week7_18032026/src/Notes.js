import React from "react";

function Notes({ notes }) {
  return (
    <div style={styles.container}>
      <h3>All Notes</h3>

      {notes.length === 0 ? (
        <p>No notes added</p>
      ) : (
        <ul style={styles.list}>
          {notes.map((note, index) => (
            <li key={index} style={styles.item}>
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #eee"
  }
};

export default Notes;