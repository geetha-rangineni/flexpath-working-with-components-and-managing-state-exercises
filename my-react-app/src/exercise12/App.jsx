import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <div>
      <h1>Exercise 12: Error Boundaries</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
