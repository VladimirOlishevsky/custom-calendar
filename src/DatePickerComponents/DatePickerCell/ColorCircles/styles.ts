import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    width: '24px'
  },
  
  circle: {
    width: '8px',
    height: '8px',
    display:' block',
    margin: '-1px',
    boxSizing: 'content-box',
    border: '1px solid #fff',
    borderRadius: '50%',
  
    '&:not(:first-child)': {
      marginRight: '-3px'
    }
  }
}));
