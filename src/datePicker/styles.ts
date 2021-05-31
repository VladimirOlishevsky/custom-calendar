import { makeStyles } from '@material-ui/core';

import { widthDayButton } from '../WeekPicker/constants';
import { ICON_BUTTON_SIZE } from './constants';


interface IProps {
  isToday: boolean,
}

export const getStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: 'max-content',
  },
  iconButton: {
    backgroundColor: theme.palette.background.paper,
    width: ICON_BUTTON_SIZE.width,
    height: ICON_BUTTON_SIZE.height,
    minWidth: 0,
  },
  dayButton: {
    minWidth: widthDayButton,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(0, 0.5),
    textTransform: 'none',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
  },
  popper: {
    marginTop: theme.spacing(),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px -3px 32px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(),
  },
  today: {
    color: (props: IProps) => (props.isToday ? '#0055CB' : theme.palette.common.black),
  },
  monthDate: {
    color: (props: IProps) => (props.isToday ? 'rgba(17, 85, 203, 0.4)' : '#7B819B'),
    marginLeft: theme.spacing(0.5),
  },
}));
