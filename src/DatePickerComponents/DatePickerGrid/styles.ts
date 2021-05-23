import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
  root: {
    width: '100%',
    top: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 50px)',
    gridTemplateRows: 'repeat(7, 50px)',
    gridRowGap: '10px',
    justifyItems: 'center',
    alignItems: 'center'
  },

  weekdays: {
    color: '#84898d',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}));