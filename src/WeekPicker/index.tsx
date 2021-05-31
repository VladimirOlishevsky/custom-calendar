import {
  Button, Typography, Grid, Popper, ClickAwayListener,
} from '@material-ui/core';
import { PopperPlacementType } from '@material-ui/core/Popper';
import clsx from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { DatePickerHeader } from '../DatePicker/DatePickerHeader';
import { todayTitle } from './constants';
import { getStyles } from './styles';
import { WeekItem } from './WeekItem';
import { getCalendarDates, getWeekEnd, getWeekStart, nextMonthClick, prevMonthClick } from '../__utils__';


export const WeekPicker = observer(() => {
  const beginYear = dayjs('09-01-2020'); // TODO - use correct data from props
  const endYear = dayjs('08-31-2021'); // TODO - use correct data from props

  const classes = getStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [startOfCurrentWeek, setStartOfCurrentWeek] = useState<Dayjs>(dayjs());

  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const onClickToday = () => {
    setStartOfCurrentWeek(dayjs());
    setCurrentMonth(dayjs());
    setSelectedCell(null);
  };

  const onMonthClick = (el: Dayjs) => {
    setCurrentMonth(el);
    setSelectedCell(null);
  };

  const onClickSelected = (index: number, date: Dayjs) => {
    setSelectedCell(index);
    setStartOfCurrentWeek(date)
  };

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const isMonday = (el: string) => 1 === dayjs(el).get('day');
  const weeks = getCalendarDates(currentMonth).filter(el => isMonday(el));
  const currentWeek = `${getWeekStart(startOfCurrentWeek)} - ${getWeekEnd(startOfCurrentWeek)}`;

  return (
    <div className={classes.root}>
      <Grid container className={classes.buttonsBlock}>
        <Button
          onClick={handleClick('bottom-start')}
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
          <Popper open={open} anchorEl={anchorEl} disablePortal placement={placement}>
            <Grid container direction="column" className={classes.popper}>
              <DatePickerHeader
                prevMonthClick={() => prevMonthClick(currentMonth, onMonthClick)}
                nextMonthClick={() => nextMonthClick(currentMonth, onMonthClick)}
                currentMonth={currentMonth}
                isDatePicker={false}
                beginYear={beginYear}
                endYear={endYear}
              />

              {weeks.map((date, index) => (
                <WeekItem
                  key={date}
                  startOfCurrentWeek={startOfCurrentWeek}
                  startOfWeek={dayjs(date)}
                  onClickSelected={() => onClickSelected(index, dayjs(date))}
                  isSelected={Boolean(index === selectedCell)}
                  beginYear={beginYear}
                />
              ))}
            </Grid>
          </Popper>
        </ClickAwayListener>
      ) : null}
    </div>
  );
});
