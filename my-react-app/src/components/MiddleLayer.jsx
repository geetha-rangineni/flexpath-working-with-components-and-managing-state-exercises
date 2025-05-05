// src/components/MiddleLayer.jsx
import React from 'react';
import DeepNestedComponent from './DeepNestedComponent';

const MiddleLayer = () => {
  return (
    <div>
      <h2>Middle Layer</h2>
      <DeepNestedComponent />
    </div>
  );
};

export default MiddleLayer;
