import React from "react";

function App() {
  const name = "Vishakha";
  const date = new Date().toLocaleDateString();
  const greeting = "Welcome to React Practical!";

  // JSX allows embedding JS expressions inside {}
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{greeting}</h1>
      <h2>Hello, {name}!</h2>
      <p>Today's date: {date}</p>

      <h3>JSX List Example:</h3>
      <ul>
        {["HTML", "CSS", "JSX", "React"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
    </div>
  );
}

export default App;