import React, { ReactElement, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { IconButton } from '@material-ui/core';
import IconArrowBack from '@material-ui/icons/ArrowBack';
import IconArrowForward from '@material-ui/icons/ArrowForward';
// import { useDatePickerStore } from 'hooks/useLocalStores';
import { getStyles } from './styles';


interface Props {
  children: ReactNode;
}

const DatePickerHeaderComponent = ({ children }: Props): ReactElement => {

  const classes = getStyles();
  // const {
  //   datePickerState: {
  //     onNextMonthClick,
  //     onPrevMonthClick,
  //   },
  // } = useDatePickerStore();

  return (
    <div className={classes.root}>
      <IconButton>
        <IconArrowBack htmlColor="#0a0a0a" fontSize="large" />
      </IconButton>
      <div className={classes.title}>
        {children}
      </div>
      <IconButton>
        <IconArrowForward htmlColor="#0a0a0a" fontSize="large" />
      </IconButton>
    </div>
  );
};

export const DatePickerHeader = observer(DatePickerHeaderComponent);
