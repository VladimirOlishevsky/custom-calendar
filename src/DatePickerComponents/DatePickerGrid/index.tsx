import React, { ReactElement, ReactNode } from 'react';
import { Weekdays } from '../constants';
import { getStyles } from './styles';


interface Props {
  children: ReactNode;
}

const DatePickerGrid = ({ children }: Props): ReactElement => {
  const classes = getStyles();
  return (
  <div className={classes.root}>
    {Weekdays.map((weekday) => (
      <div key={weekday} className={classes.weekdays}>
        {weekday}
      </div>
    ))}
    {children}
  </div>
)};

export { DatePickerGrid };
