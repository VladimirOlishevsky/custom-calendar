import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
// import { useDatePickerStore } from 'hooks/useLocalStores';
import { ColorCircles } from './ColorCircles';
import { getStyles } from './styles';
import { DatePickerState } from '../../datePicker';


interface Props {
  cellDate: string,
  children: ReactNode;
}

const DatePickerCellComp = ({ cellDate, children }: Props): ReactElement => {
  const classes = getStyles();

  const dateStore = new DatePickerState()
  const {
     
    // getCellVariantStyle, 
    // getCellHighlightStyle, 
    getDayStatuses, onDateClick 
  } = dateStore

  // const variant = getCellVariantStyle(cellDate);
  // const highlight = getCellHighlightStyle(cellDate);
  const statuses = getDayStatuses(cellDate);

  return (
    <div
      // data-value={highlight}
      className={clsx(
        classes.highlight,
        // { [classes[highlight]]: variant !== 'disabled' },
      )}
    >
      {/* <ColorCircles /> */}
      <button
        type="button"
        data-value={''}
        className={clsx(classes.button)}
        onClick={() => { }}
      >
        {children}
      </button>
    </div>
  );
};

export const DatePickerCell = observer(DatePickerCellComp);
