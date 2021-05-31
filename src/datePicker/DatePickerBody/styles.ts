import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'max-content',
    borderRadius: theme.spacing(),
    padding: theme.spacing(2),
  },
  calendarRoot: {
    width: '100%',
    top: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 50px)',
    gridTemplateRows: 'repeat(7, 50px)',
    gridRowGap: theme.spacing(),
    gridColumnGap: theme.spacing(0.5),
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  weekDay: {
    textTransform: 'lowercase',
  },
  sunday: {
    color: '#CC2A35',
  },
  weekNumbers: {
    color: '#7B819B',
  },
}));
