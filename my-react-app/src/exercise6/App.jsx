import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import MiddleLayer from '../components/MiddleLayer';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Exercise 6: Context API</h1>
        <MiddleLayer />
      </div>
    </ThemeProvider>
  );
};

export default App;
