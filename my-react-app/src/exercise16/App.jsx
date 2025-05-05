// src/App.jsx
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>App Component</h1>

      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
