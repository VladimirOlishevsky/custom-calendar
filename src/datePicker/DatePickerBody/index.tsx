import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { PickerHeader } from '../../PickerHeader';
import { DatePickerCell } from '../DatePickerCell';
import { weekdays } from '../constants';
import { IDatePickerBody } from '../types';
import { getCalendarDates, getWeekNumberFromStartOfPeriod, isFirstCell } from '../../__utils__';
import { getStyles } from './styles';


export const DatePickerBody = ({
  currentMonth,
  setCurrentMonth,
  setSelectedCell,
  onClickSelected,
  selectedCell,
  beginYear,
  endYear,
  disabledHeader
}: IDatePickerBody) => {
  const classes = getStyles();

  return (
    <Grid className={classes.root}>
      <PickerHeader
        setCurrentMonth={setCurrentMonth}
        setSelectedCell={setSelectedCell}
        currentMonth={currentMonth}
        isDatePicker
        beginYear={beginYear}
        endYear={endYear}
        disabledHeader={disabledHeader}
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
            key={String(date)}
          >
            {isFirstCell(index)
              && (
                <Typography
                  className={classes.weekNumbers}
                >
                  {getWeekNumberFromStartOfPeriod(beginYear!, date)}
                </Typography>
              )}
            <DatePickerCell
              cellDate={date}
              onClickSelected={() => onClickSelected(index, date)}
              isSelected={Boolean(index === selectedCell)}
              currentMonth={currentMonth}
            />
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

