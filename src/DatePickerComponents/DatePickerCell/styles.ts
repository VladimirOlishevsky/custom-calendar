import {
  makeStyles,
} from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
  highlight: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },

  single: {
    backgroundColor: '#d5edff',
    borderRadius: '50%'
  },

  first: {
    backgroundColor: '#d5edff',
    borderRadius: '50% 0 0 50%'
  },

  middle: {
    backgroundColor: '#d5edff'
  },

  last: {
    backgroundColor: '#d5edff',
    borderRadius: '0 50% 50% 0'
  },
  unset: {
    backgroundColor: '#fff'
  },

  button: {
    width: '100%',
    height: '100%',
    outline: 0,
    cursor: 'pointer',
    fontSize: '18px',
    color: '#0a0a0a',
    background: 'none',
    border: 'none',
    borderRadius: '50%',

    '&[data-value="selected"]:hover': {
      backgroundColor: '#1788c4',
      color: '#fff'
    },

    '&:hover': {
      backgroundColor: '#b7d3e5'
    }
  },

  current: {
    border: '1px solid #1788c4'
  },

  hover: {
    backgroundColor: '#b7d3e5',
  },

  disabled: {
    color: '#c1c5cd'
  },

  selected: {
    backgroundColor: '#27a3e4'
  },

  default: {
    backgroundColor: 'transparent'
  }
}));