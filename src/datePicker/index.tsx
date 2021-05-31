import {
  PopperPlacementType, Grid, Typography, ClickAwayListener, Popper, Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Dayjs } from 'dayjs';
import { getStyles } from './styles';
import { capitalizeFirstLetter, formatDate } from '../__utils__';
import { DatePickerBody } from './DatePickerBody';
import { dayjs } from '../index'


export const DatePicker = () => {
  const beginYear = dayjs('09-01-2020'); // TODO - use correct data from props
  const endYear = dayjs('08-31-2021'); // TODO - use correct data from props

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const isToday = dayjs(currentDate).isToday();
  
  const classes = getStyles({ isToday });

  const dayPrevNextClick = (prev?: string) => {
    return prev
      ? setCurrentDate(dayjs(currentDate).add(-1, 'day'))
      : setCurrentDate(dayjs(currentDate).add(1, 'day'));
  };

  const onMonthClick = (el: Dayjs) => {
    setCurrentMonth(el);
    setSelectedCell(null);
  };

  const onClickSelected = (index: number, date: Dayjs) => {
    setSelectedCell(index);
    setCurrentDate(date)
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

  return (
    <div className={classes.root}>
      <Grid container>
        <Button
          className={classes.iconButton}
          onClick={() => dayPrevNextClick('prev')}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          className={classes.dayButton}
          onClick={handleClick('bottom-start')}
        >
          <Typography className={classes.today}>
            {capitalizeFirstLetter(formatDate(currentDate, 'dd'))}
          </Typography>
          <Typography className={classes.monthDate}>
            {dayjs(currentDate).get('date')}
          </Typography>
        </Button>
        <Button
          onClick={() => dayPrevNextClick()}
          className={classes.iconButton}
        >
          <ChevronRightIcon />
        </Button>
      </Grid>
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Popper open={open} anchorEl={anchorEl} disablePortal placement={placement}>
            <Grid container direction="column" className={classes.popper}>
              <DatePickerBody
                currentMonth={currentMonth}
                setCurrentMonth={onMonthClick}
                onClickSelected={onClickSelected}
                selectedCell={selectedCell}
                beginYear={beginYear}
                endYear={endYear}
              />
            </Grid>
          </Popper>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};
