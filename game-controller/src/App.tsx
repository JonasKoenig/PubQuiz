import React from 'react';
import './App.css';
import PlayerInput from './Components/PlayerInput/PlayerInput';
import PlayerInputButton from './Components/PlayerInput/PlayerInputButton';
import Screen from './Components/Screen/Screen';

function App() {
  return (
    <div className="App">
      <Screen />
      <PlayerInput />
      <PlayerInputButton />
    </div>
  );
}

export default App;
