import React from 'react';
import clsx from 'clsx';
import { Grid, Button } from '@material-ui/core';

import { getStyles } from './styles';
import { IDatePickerCell } from '../types';


export const DatePickerCell = ({
  cellDate,
  onClickSelected,
  isSelected,
  currentMonth,
}: IDatePickerCell) => {
  const classes = getStyles();

  const isSunday = 0 === cellDate.get('day');
  const isToday = cellDate.isToday();

  const notInCurrentMonth = cellDate.isBefore(currentMonth.startOf('month'))
    || (cellDate.isAfter(currentMonth.endOf('month')) && !isSunday);

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
        {cellDate.get('date')}
      </Button>
    </Grid>
  );
};
