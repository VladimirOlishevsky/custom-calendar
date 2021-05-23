import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { getStyles } from './styles';

export enum StudentStatus {
  absent = 'absent',
  accepted = 'accepted',
  participated = 'participated',
  results = 'results',
  subscribed = 'subscribed',
  waiting = 'waiting',
}

// export function getUniqueItems<T>(array: T[]): T[] {
//   return [...new Set(array)];
// }

interface Props {
  statuses: StudentStatus[],
}

const ColorCirclesComp = ({ statuses }: Props): ReactElement | null => {

  const classes = getStyles();
  if (!statuses.length) return null;
  // const statusesForView = getUniqueItems(statuses).splice(0, 3).reverse();

  return (
    <div className={classes.root}>
      <Grid container direction="row-reverse">
        {/* {statusesForView.map((status) => (
          <span className={clsx(classes.circle, classes[status])} key={status} />
        ))} */}
      </Grid>
    </div>
  );
};

export const ColorCircles = observer(ColorCirclesComp);
