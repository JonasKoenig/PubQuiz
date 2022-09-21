import React, { useState } from 'react';
import { Box } from '@mui/material';
import PlayerInputButton from './PlayerInputButton';
import './PlayerInput.css';
import Theme from '../../Assets/Theme';
import buttons from '../../Assets/Buttons';

function PlayerInput() {
  const [index, setIndex] = useState(0);
  document.onkeydown = (event) => {
    if (event.key === '+') {
      setIndex((index + 1) % Object.values(buttons).length);
    }
  };
  const labels = Object.values(buttons)[index];
  return (
    <Box className="PlayerInput">
      <div />
      <PlayerInputButton color={Theme.yellow} label={labels[0]} />
      <div />
      <PlayerInputButton color={Theme.blue} label={labels[3]} />
      <div />
      <PlayerInputButton color={Theme.red} label={labels[1]} />
      <div />
      <PlayerInputButton color={Theme.green} label={labels[2]} />
      <div />
    </Box>
  );
}

export default PlayerInput;
