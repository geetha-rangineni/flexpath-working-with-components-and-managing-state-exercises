// src/App.jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo Demo</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      {/* ChildComponent won't re-render unless `name` changes */}
      <ChildComponent name="Alice" />
    </div>
  );
}

export default App;
