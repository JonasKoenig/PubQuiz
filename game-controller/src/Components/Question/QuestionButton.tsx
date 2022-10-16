import React, { ReactElement } from 'react';
import { Button } from '@mui/material';

interface QuestionButtonProps {
    label: string,
    hidden: boolean,
    disabled: boolean,
    onClick: () => void,
    position: 'left' | 'right',
    icon: ReactElement,
}

function QuestionButton(props: QuestionButtonProps) {
  const {
    label, hidden, disabled, onClick, position, icon,
  } = props;
  if (hidden) return null;
  return (
    <Button
      sx={position === 'left' ? { mr: 'auto' } : { ml: 'auto' }}
      onClick={onClick}
      disabled={disabled}
      startIcon={position === 'left' ? icon : null}
      endIcon={position === 'right' ? icon : null}
    >
      {label}
    </Button>
  );
}

export default QuestionButton;
