import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Dayjs } from 'dayjs';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import { getStyles } from './styles';
import { IPickerHeader } from './types';
import { formatDate } from '../__utils__';


export const PickerHeader = ({
  currentMonth,
  setCurrentMonth,
  setSelectedCell,
  isDatePicker,
  beginYear,
  endYear,
  disabledHeader
}: IPickerHeader) => {
  const classes = getStyles({ isDatePicker });


  const isPeriodFirstMonth = beginYear!.get('month') === currentMonth.get('month');
  const isPeriodEndMonth = endYear!.get('month') === currentMonth.get('month');

  const onMonthClick = (el: Dayjs, next?: boolean) => {
    setCurrentMonth(el.add(next ? 1 : -1, 'month'));
    setSelectedCell(null);
  };

  return (
    <Grid className={classes.root}>
      <IconButton
        disabled={(isPeriodFirstMonth && disabledHeader) || false}
        onClick={() => onMonthClick(currentMonth)}
        className={classes.iconButton}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Grid className={classes.title}>
        <Typography className={classes.month}>
          {formatDate(currentMonth, 'MMMM')}
        </Typography>
        {isDatePicker ? (
          <Typography className={classes.year}>
            {currentMonth.get('year')}
          </Typography>
        ) : null}
      </Grid>
      <IconButton
        disabled={(isPeriodEndMonth && disabledHeader) || false}
        onClick={() => onMonthClick(currentMonth, true)}
        className={classes.iconButton}
      >
        <ChevronRightIcon />
      </IconButton>
    </Grid>
  );
};
