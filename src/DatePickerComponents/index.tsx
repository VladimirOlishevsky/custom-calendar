import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerCell } from './DatePickerCell';
import { DatePickerGrid } from './DatePickerGrid';
import { Months } from './constants';
import { getStyles } from './styles';
import dayjs from 'dayjs';


export const getGridDates = (date: string): string[] => {
  const dateObj = new Date(date);
  const firstDayWeek = dayjs(dateObj).startOf('month').startOf('week');
  const lastDay = dayjs(dateObj).endOf('month').endOf('week');
  const diff = lastDay.diff(firstDayWeek, 'd')
  const dates = [];
  for (let i = 0; i <= diff; i += 1) {
    dates.push(firstDayWeek.add(i, 'day').format('YYYY-MM-DD'))
  }

  return dates;
};


const DatePickerComponent = (): ReactElement => {

  const classes = getStyles();

  const date = dayjs(new Date()).format('YYYY-MM-DD')


  const dates = getGridDates(date)
  // const {
  //   datePickerState: { monthDisplayed, dates },
  // } = useDatePickerStore();
  return (
    <div className={classes.root}>
      <DatePickerHeader>
        {Months[new Date(date).getMonth()]}
      </DatePickerHeader>
      <DatePickerGrid>
        {dates.map((cellDate) => (
          <DatePickerCell cellDate={cellDate} key={cellDate}>
            {new Date(cellDate).getDate()}
          </DatePickerCell>
        ))}
      </DatePickerGrid>
    </div>
  );
};

export const DatePicker = observer(DatePickerComponent);
