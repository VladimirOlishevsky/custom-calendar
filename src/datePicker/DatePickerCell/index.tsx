import React from 'react';
import clsx from 'clsx';
import { Grid, Button } from '@material-ui/core';
import dayjs from 'dayjs';

import { getStyles } from './styles';
import { IDatePickerCell } from '../types';


export const DatePickerCell = ({
  cellDate,
  onClickSelected,
  isSelected,
  currentMonth,
}: IDatePickerCell) => {
  const classes = getStyles();

  const isSunday = 0 === dayjs(cellDate).get('day');
  const isToday = dayjs(cellDate).isToday();

  const notInCurrentMonth = dayjs(cellDate).isBefore(dayjs(currentMonth).startOf('month'))
    || (dayjs(cellDate).isAfter(dayjs(currentMonth).endOf('month')) && !isSunday);

  return (
    <Grid
      className={clsx(
        classes.gridCell,
      )}
    >
      <Button
        className={clsx(
          classes.button,
          isSelected && classes.daySelected,
          isToday && classes.today,
          notInCurrentMonth && classes.notInCurrentMonth,
          isSunday && classes.sunday,
        )}
        onClick={onClickSelected}
      >
        {new Date(cellDate).getDate()}
      </Button>
    </Grid>
  );
};
