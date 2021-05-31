import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import dayjs from 'dayjs';

import { getStyles } from './styles';
import { IWeekItem } from '../types';
import { getWeekEnd, getWeekNumberFromStartOfPeriod, getWeekStart, isCurrentWeek } from '../../__utils__';


export const WeekItem = ({
  startOfCurrentWeek,
  onClickSelected,
  isSelected,
  startOfWeek,
  beginYear,
}: IWeekItem) => {
  const classes = getStyles();

  const weekStart = getWeekStart(startOfWeek);
  const weekEnd = getWeekEnd(startOfWeek);
  const currentWeek = isCurrentWeek(startOfWeek, startOfCurrentWeek);

  return (
    <Grid
      item
      onClick={onClickSelected}
      className={clsx(
        classes.week,
        currentWeek && classes.weekSelected,
        isSelected && classes.weekSelected,
      )}
    >
      <Typography className={classes.weekPeriod}>
        {`${weekStart} - ${weekEnd}`}
      </Typography>
      <Typography className={classes.weekNumber}>
        {`${getWeekNumberFromStartOfPeriod(beginYear, dayjs(startOfWeek))} week`}
      </Typography>
    </Grid>
  );
};
