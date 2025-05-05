import React from "react";
import { useTheme } from "../context/ThemeContext";

const DeepNestedComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h3>Deep Nested Component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default DeepNestedComponent;

