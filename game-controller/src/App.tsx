import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import { Box } from '@mui/material';
import Progress from './Components/Progress/Progress';
import CategoryView, { Category } from './Components/Category/Category';
import { Question } from './Components/Question/Question';
import config from './Assets/config.json';

export type AppState = {
  category: number,
  setCategory: Dispatch<SetStateAction<number>>,
  getCategory: () => Category,
  question: number,
  setQuestion: Dispatch<SetStateAction<number>>,
  getQuestion: () => Question,
}

function App() {
  const [category, setCategory] = useState(0);
  const [question, setQuestion] = useState(0);
  const getCategory = () => config.categories[category];
  const getQuestion = () => getCategory().questions[question];
  const state: AppState = {
    category, setCategory, getCategory, question, setQuestion, getQuestion,
  };
  const { categories } = config;
  return (
    <Box>
      <Box padding="10px">
        <Progress categories={categories} appState={state} />
      </Box>
      <Box padding="10px">
        <CategoryView state={state} />
      </Box>
    </Box>
  );
}

export default App;
