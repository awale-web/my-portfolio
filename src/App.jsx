import React from 'react';
import Browser from './Layout/Browser'; // Import the Browser component

function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}> {/* Full screen */}
      <Browser /> {/* Render the Browser component */}
    </div>
  );
}

export default App;