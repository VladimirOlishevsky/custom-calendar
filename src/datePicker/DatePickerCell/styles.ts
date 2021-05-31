import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles((theme) => ({
  gridCell: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  sunday: {
    color: '#CC2A35',
  },
  notInCurrentMonth: {
    color: '#7B819B',
  },
  button: {
    width: '100%',
    height: '100%',
    outline: 0,
    padding: 0,
    minWidth: 0,
    cursor: 'pointer',
    background: 'none',
    borderRadius: theme.spacing(),
    fontSize: theme.typography.body1.fontSize,
    '&:hover': {
      border: `2px solid #0055CB`,
      backgroundColor: 'transparent',
    },
    border: `2px solid #F4F3F8`,
  },
  today: {
    backgroundColor: `#0055CB`,
    color: theme.palette.background.paper,
    border: 'none',
    '&:hover': {
      backgroundColor: `#0055CB`,
    },
  },
  daySelected: {
    border: `2px solid #0055CB`,
  },
}));
