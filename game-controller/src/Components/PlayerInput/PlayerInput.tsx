import React from 'react';
import { Box } from '@mui/material';
import PlayerInputButton from './PlayerInputButton';
import './PlayerInput.css';

function PlayerInput() {
  return (
    <Box className="PlayerInput">
      <div />
      <PlayerInputButton />
      <div />
      <PlayerInputButton />
      <div />
      <PlayerInputButton />
      <div />
      <PlayerInputButton />
      <div />
    </Box>
  );
}

export default PlayerInput;
