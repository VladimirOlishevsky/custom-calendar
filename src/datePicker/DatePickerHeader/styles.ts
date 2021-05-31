import {
  makeStyles,
} from '@material-ui/core/styles';

interface IProps {
  isDatePicker: boolean,
}

export const getStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: (props: IProps) => (props.isDatePicker ? 0 : theme.spacing(3)),
  },
  title: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
  },
  year: {
    color: '#7B819B',
    fontSize: theme.typography.caption.fontSize,
  },
  chevronsColor: {
    color: theme.palette.common.black,
  },
  iconButton: {
    padding: 0,
    color: theme.palette.common.black,
  },
}));
