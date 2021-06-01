import {
  Grid, Typography, ClickAwayListener, Popper, Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Dayjs } from 'dayjs';
import { getStyles } from './styles';
import { formatDate } from '../__utils__';
import { DatePickerBody } from './DatePickerBody';
import { dayjs } from '../index'
import { IDatePicker } from './types';


export const DatePicker = ({
  beginYear = dayjs('09-01-2020'),
  endYear = dayjs('08-31-2021')
}: IDatePicker) => {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const isToday = currentDate.isToday();
  
  const classes = getStyles({ isToday });

  const dayPrevNextClick = (prev?: string) => {
    return prev
      ? setCurrentDate(currentDate.add(-1, 'day'))
      : setCurrentDate(currentDate.add(1, 'day'));
  };

  const onMonthClick = (el: Dayjs) => {
    setCurrentMonth(el);
    setSelectedCell(null);
  };

  const onClickSelected = (index: number, date: Dayjs) => {
    setSelectedCell(index);
    setCurrentDate(date)
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl)

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
          onClick={handleClick}
        >
          <Typography className={classes.today}>
            {formatDate(currentDate, 'dd')}
          </Typography>
          <Typography className={classes.monthDate}>
            {currentDate.get('date')}
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
          <Popper open={open} anchorEl={anchorEl} disablePortal placement='bottom-start'>
            <Grid container direction="column" className={classes.popper}>
              <DatePickerBody
                currentMonth={currentMonth}
                setCurrentMonth={onMonthClick}
                setSelectedCell={setSelectedCell}
                onClickSelected={onClickSelected}
                selectedCell={selectedCell}
                beginYear={beginYear}
                endYear={endYear}
                disabledHeader={false}
              />
            </Grid>
          </Popper>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};
