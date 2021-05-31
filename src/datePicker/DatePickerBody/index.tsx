import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import clsx from 'clsx';

import { DatePickerHeader } from '../DatePickerHeader';
import { DatePickerCell } from '../DatePickerCell';
import { weekdays } from '../constants';
import { IDatePickerBody } from '../types';
import { getCalendarDates, getWeekNumberFromStartOfPeriod, isFirstCell, nextMonthClick, prevMonthClick } from '../../__utils__';
import { getStyles } from './styles';


export const DatePickerBody = ({
  currentMonth,
  setCurrentMonth,
  onClickSelected,
  selectedCell,
  beginYear,
  endYear,
}: IDatePickerBody) => {
  const classes = getStyles();

  return (
    <Grid className={classes.root}>
      <DatePickerHeader
        prevMonthClick={() => prevMonthClick(currentMonth, setCurrentMonth)}
        nextMonthClick={() => nextMonthClick(currentMonth, setCurrentMonth)}
        currentMonth={currentMonth}
        isDatePicker
        beginYear={beginYear}
        endYear={endYear}
      />
      <Grid className={classes.calendarRoot}>
        <Grid></Grid>
        {weekdays.map((weekday) => (
          <Typography
            key={weekday}
            className={clsx(
              'su' === weekday && classes.sunday, // TODO - need info about saturday
            )}
          >
            {weekday}
          </Typography>
        ))}
        {getCalendarDates(currentMonth).map((date, index) => (
          <Fragment
            key={date}
          >
            {isFirstCell(index)
              && (
                <Typography
                  className={classes.weekNumbers}
                >
                  {getWeekNumberFromStartOfPeriod(beginYear!, dayjs(date))}
                </Typography>
              )}
            <DatePickerCell
              cellDate={date}
              key={date}
              onClickSelected={() => onClickSelected(index, dayjs(date))}
              isSelected={Boolean(index === selectedCell)}
              currentMonth={currentMonth}
            />
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

