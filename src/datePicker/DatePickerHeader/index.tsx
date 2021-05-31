import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { getStyles } from './styles';
import { IDatePickerHeader } from '../types';
import { capitalizeFirstLetter, formatDate } from '../../__utils__';


export const DatePickerHeader = ({
  currentMonth,
  prevMonthClick,
  nextMonthClick,
  isDatePicker,
  beginYear,
  endYear,
}: IDatePickerHeader) => {
  const classes = getStyles({ isDatePicker });
  const isPeriodFirstMonth = dayjs(beginYear).get('month') === dayjs(currentMonth).get('month');
  const isPeriodEndMonth = dayjs(endYear).get('month') === dayjs(currentMonth).get('month');

  return (
    <Grid className={classes.root}>
      <IconButton
        disabled={isPeriodFirstMonth || false}
        onClick={prevMonthClick}
        className={classes.iconButton}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Grid className={classes.title}>
        <Typography>
          {capitalizeFirstLetter(formatDate(dayjs(currentMonth), 'MMMM'))}
        </Typography>
        {isDatePicker ? (
          <Typography className={classes.year}>
            {dayjs(currentMonth).get('year')}
          </Typography>
        ) : null}
      </Grid>
      <IconButton
        disabled={isPeriodEndMonth || false}
        onClick={nextMonthClick}
        className={classes.iconButton}
      >
        <ChevronRightIcon />
      </IconButton>
    </Grid>
  );
};
