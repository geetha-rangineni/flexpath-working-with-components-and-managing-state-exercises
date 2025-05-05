import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DeepNestedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Deep Nested Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default DeepNestedComponent;
