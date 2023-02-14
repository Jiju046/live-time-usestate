import React, { useState } from "react";
import "../styles.css"

function App() {
  setInterval(update, 1000);
  let time = new Date().toLocaleTimeString("en-US", { hour12: false });
  let [currenTime, updateTime] = useState(time);
  function update() {
    const getTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    updateTime(getTime);
  }
  return (
    <div className="container">
      <h1>{currenTime}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
