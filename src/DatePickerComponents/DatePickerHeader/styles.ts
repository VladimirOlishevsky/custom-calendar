import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a0a0a',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
}));