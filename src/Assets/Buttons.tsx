import React from 'react';
import {
  ArrowUpward, ArrowForward, ArrowDownward, ArrowBack,
  ChangeHistory, PanoramaFishEye, Close, SquareOutlined,
} from '@mui/icons-material';

const buttons = {
  map: ['N', 'E', 'S', 'W'],
  quiz: ['A', 'B', 'C', 'D'],
  wasd: ['W', 'A', 'S', 'D'],
  numbers: ['1', '2', '3', '4'],
  directions: ['Up', 'Right', 'Down', 'Left'],
  arrows: [<ArrowUpward />, <ArrowForward />, <ArrowDownward />, <ArrowBack />],
  playstation: [<ChangeHistory />, <PanoramaFishEye />, <Close />, <SquareOutlined />],
  xbox: ['Y', 'B', 'A', 'X'],
};

export default buttons;
