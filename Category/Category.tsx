import React, { ReactElement } from 'react';
import { Container } from '@mui/material';
import QuestionView, { Question } from '../Question/Question';
import { AppState } from '../../App';

export type Category = {
  title: string,
  questions: Question[],
}

interface CategoryViewProps {
  state: AppState,
}

function CategoryView(props: CategoryViewProps): ReactElement {
  const { state } = props;
  return (
    <Container>
      <QuestionView state={state} />
    </Container>
  );
}

export default CategoryView;
