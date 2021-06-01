import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/en';

dayjs.locale('en')
dayjs.extend(isToday);
dayjs.extend(isBetween);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export * as dayjs from 'dayjs';