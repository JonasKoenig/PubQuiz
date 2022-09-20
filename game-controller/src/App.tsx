import React from 'react';
import './App.css';
import PlayerInput from './Components/PlayerInput/PlayerInput';
import Screen from './Components/Screen/Screen';

function App() {
  return (
    <div className="App">
      <Screen />
      <PlayerInput />
    </div>
  );
}

export default App;
