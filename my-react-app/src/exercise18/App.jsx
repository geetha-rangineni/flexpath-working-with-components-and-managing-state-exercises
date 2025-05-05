import React, { useState, useMemo } from "react";

// Expensive factorial function
const computeFactorial = (n) => {
  console.log("Computing factorial for", n);
  return n <= 1 ? 1 : n * computeFactorial(n - 1);
};

function App() {
  const [number, setNumber] = useState(1);

  // Memoize the factorial calculation
  const factorial = useMemo(() => computeFactorial(number), [number]);

  const handleClick = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Factorial Calculator with useMemo</h1>
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={handleClick}>Next Number</button>
    </div>
  );
}

export default App;
