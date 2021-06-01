import {
  Button, Typography, Grid, Popper, ClickAwayListener,
} from '@material-ui/core';
import clsx from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { PickerHeader } from '../PickerHeader';
import { todayTitle } from './constants';
import { getStyles } from './styles';
import { WeekItem } from './WeekItem';
import { getCalendarDates, getWeekEnd, getWeekStart } from '../__utils__';
import { IWeekPicker } from './types';


export const WeekPicker = ({
  beginYear = dayjs('09-01-2020'),
  endYear = dayjs('08-31-2021')
}: IWeekPicker) => {

  const classes = getStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [startOfCurrentWeek, setStartOfCurrentWeek] = useState<Dayjs>(dayjs());

  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const onClickToday = () => {
    setStartOfCurrentWeek(dayjs());
    setCurrentMonth(dayjs());
    setSelectedCell(null);
  };

  const onClickSelected = (index: number, date: Dayjs) => {
    setSelectedCell(index);
    setStartOfCurrentWeek(date)
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const isMonday = (el: Dayjs) => 1 === el.get('day');
  const weeks = getCalendarDates(currentMonth).filter(el => isMonday(el));
  const currentWeek = `${getWeekStart(startOfCurrentWeek)} - ${getWeekEnd(startOfCurrentWeek)}`;

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <Grid container className={classes.buttonsBlock}>
        <Button
          onClick={handleClick}
          className={clsx(
            classes.buttonToggle,
            classes.currentWeek,
          )}
        >
          <Typography className={classes.weekPeriod}>
            {currentWeek}
          </Typography>
          <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
        </Button>
        <Button
          onClick={onClickToday}
          className={clsx(
            classes.buttonToggle,
            classes.today,
          )}
        >
          <Typography>
            {todayTitle}
          </Typography>
        </Button>
      </Grid>
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Popper open={open} anchorEl={anchorEl} disablePortal placement='bottom-start'>
            <Grid container direction="column" className={classes.popper}>
              <PickerHeader
                setCurrentMonth={setCurrentMonth}
                setSelectedCell={setSelectedCell}
                currentMonth={currentMonth}
                isDatePicker={false}
                beginYear={beginYear}
                endYear={endYear}
                disabledHeader={true}
              />

              {weeks.map((date, index) => (
                <Grid
                  key={String(date)}
                  item>
                  <WeekItem
                    startOfCurrentWeek={startOfCurrentWeek}
                    startOfWeek={date}
                    onClickSelected={() => onClickSelected(index, date)}
                    isSelected={Boolean(index === selectedCell)}
                    beginYear={beginYear}
                  />
                </Grid>
              ))}
            </Grid>
          </Popper>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};
