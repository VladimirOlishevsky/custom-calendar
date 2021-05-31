import { makeStyles } from '@material-ui/core';
import { weekBorderRadius, weekHeight } from '../constants';

export const getStyles = makeStyles(theme => ({
  week: {
    padding: theme.spacing(0, 3),
    height: weekHeight,
    borderRadius: weekBorderRadius,
    border: `1px solid #F4F3F8`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  weekPeriod: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  weekNumber: {
    color: '#7B819B',
  },
  weekSelected: {
    border: `2px solid #0055CB`,
  },
}));
