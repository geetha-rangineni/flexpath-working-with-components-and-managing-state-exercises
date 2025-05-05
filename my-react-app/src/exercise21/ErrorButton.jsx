import React from "react";

function ErrorButton() {
  const handleClick = () => {
    try {
      // Simulate error
      throw new Error("Button click error");
    } catch (error) {
      console.error("Error caught in event handler:", error);
    }
  };

  return <button onClick={handleClick}>Cause Error</button>;
}

export default ErrorButton;
