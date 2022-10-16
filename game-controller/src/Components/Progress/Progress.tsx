import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Category } from '../Category/Category';
import { AppState } from '../../App';

interface ProgressProps {
    categories: Category[],
    appState: AppState,
}

function Progress(props: ProgressProps) {
  const { categories, appState: active } = props;
  return (
    <Stepper activeStep={active.category} alternativeLabel>
      {/* <Step key="Start">
        <StepLabel>Start</StepLabel>
      </Step> */}
      {categories.map((category) => (
        <Step key={category.title}>
          <StepLabel>{category.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default Progress;
