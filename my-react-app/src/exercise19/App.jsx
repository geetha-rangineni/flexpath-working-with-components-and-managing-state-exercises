import React, { useState, useCallback } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);

  // Memoized function using useCallback
  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <p>Clicks: {clicks}</p>
      <Button onClick={incrementCount}>Increment Count</Button>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}

export default App;
