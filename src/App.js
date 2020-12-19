import React from 'react';
import Weather from './components/Weather';
import Background from './backw.jpg';

function App() {
  const styles = {
    textAlign: 'center',
    
  }
  return (
    <div style={styles}>
      <div>
        <h1>Weather App</h1>
      </div>
      <Weather />
    </div>
  );
}

export default App;
