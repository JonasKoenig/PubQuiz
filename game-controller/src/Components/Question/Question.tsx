import React, { ReactElement } from 'react';
import {
  Card, CardContent, Typography,
  List, ListItem, ListItemButton, ListItemIcon, Avatar, ListItemText, CardActions,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { AppState } from '../../App';
import config from '../../Assets/config.json';
import QuestionButton from './QuestionButton';

export type Question = {
  title: string,
  answer: number | string | string[],
}

interface QuestionViewProps {
    state: AppState
}

function QuestionView(props: QuestionViewProps): ReactElement {
  const { state } = props;
  const { title, questions } = state.getCategory();

  const isFirstQuestion = state.question === 0;
  const isFirstCategory = state.category === 0;
  const isLastQuestion = state.question === questions.length - 1;
  const isLastCategory = state.category === config.categories.length - 1;

  const previous = () => {
    if (isFirstCategory && isFirstQuestion) return;
    if (isFirstQuestion) state.setCategory(state.category - 1);
    state.setQuestion(isFirstQuestion
      ? state.getCategory().questions.length
      : state.question - 1);
  };
  const next = () => {
    if (isLastCategory && isLastQuestion) return;
    if (isLastQuestion) state.setCategory(state.category + 1);
    state.setQuestion(isLastQuestion ? 0 : state.question + 1);
  };

  return (
    <Card className="Question">
      <CardContent>
        <Typography color="text.secondary">
          {`${title} - Question ${state.question + 1} of ${questions.length}`}
        </Typography>
        <Typography variant="h5">What is the worlds longest river?</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><Avatar>A</Avatar></ListItemIcon>
              <ListItemText>Nile</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <QuestionButton
          label={isFirstQuestion && !isFirstCategory ? `Category: ${config.categories[state.category - 1].title}` : 'Previous'}
          position="left"
          onClick={previous}
          disabled={false}
          hidden={isFirstCategory && isFirstQuestion}
          icon={<ArrowBack />}
        />
        <QuestionButton
          label={isLastQuestion && !isLastCategory ? `Category: ${config.categories[state.category + 1].title}` : 'Next'}
          position="right"
          onClick={next}
          disabled={false}
          hidden={isLastCategory && isLastQuestion}
          icon={<ArrowForward />}
        />
      </CardActions>
    </Card>
  );
}

export default QuestionView;
