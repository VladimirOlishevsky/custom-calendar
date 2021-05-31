import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
require('dayjs/locale/en')
dayjs.locale('en')

dayjs.extend(isToday);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export * as dayjs from 'dayjs';