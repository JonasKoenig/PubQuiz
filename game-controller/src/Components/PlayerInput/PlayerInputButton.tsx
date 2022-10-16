import React, { ReactElement } from 'react';
import { Fab } from '@mui/material';
import './PlayerInput.css';

interface PlayerInputButtonProps {
  color: string
  label: string | ReactElement
  position: 'top' | 'left' | 'right' | 'bottom'
}

function PlayerInputButton(props: PlayerInputButtonProps) {
  const { color, label, position } = props;
  return (
    <Fab
      className="PlayerInputButton"
      sx={{ backgroundColor: color }}
      onClick={() => document.dispatchEvent(new Event(`${position}Button`))}
    >
      {label}
    </Fab>
  );
}

export default PlayerInputButton;
