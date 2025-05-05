import React from "react";
import useWindowWidth from "./useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Current Window Width</h1>
      <p>{width}px</p>
    </div>
  );
}

export default App;
