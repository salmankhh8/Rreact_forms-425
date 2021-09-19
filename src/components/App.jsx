import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleClick(event) {
    setHeading(name); // setting the value and adding in the name
  }
  function handleChange(event) {
    setName(event.target.value); //setting up the value
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
      </form>

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
