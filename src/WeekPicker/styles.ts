import { makeStyles } from '@material-ui/core';

import { popperWidth, weekHeight } from './constants';


export const getStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: 'max-content',
  },
  buttonsBlock: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(),
  },
  buttonToggle: {
    height: weekHeight,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    borderRadius: 0,
    padding: theme.spacing(0, 2.5),
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  currentWeek: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    borderRadius: theme.spacing(1, 0, 0, 1),
    borderRight: `1px solid #F4F3F8`,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  today: {
    borderRadius: theme.spacing(0, 1, 1, 0),
    color: '#0055CB',
    textTransform: 'none',
  },
  arrowDownIcon: {
    marginLeft: theme.spacing(1.5),
  },
  popper: {
    width: popperWidth,
    marginTop: theme.spacing(),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px -3px 32px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(),
  },
  popperHeader: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popperTitles: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  weekPeriod: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
