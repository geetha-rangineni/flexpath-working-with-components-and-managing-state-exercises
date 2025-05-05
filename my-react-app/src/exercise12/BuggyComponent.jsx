import React from "react";

function BuggyComponent() {
  // Simulate an error
  throw new Error("I crashed!");
  return <div>This will not be rendered</div>;
}

export default BuggyComponent;
