import React, { ReactElement } from 'react';
import { Fab } from '@mui/material';
import './PlayerInput.css';

interface PlayerInputButtonProps {
  color: string
  label: string | ReactElement
}

function PlayerInputButton(props: PlayerInputButtonProps) {
  const { color, label } = props;
  return (
    <Fab
      className="PlayerInputButton"
      sx={{ backgroundColor: color }}
    >
      {label}
    </Fab>
  );
}

export default PlayerInputButton;
