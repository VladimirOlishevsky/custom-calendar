import { Dayjs } from "dayjs";

export interface IWeekItem extends Pick<IWeekPicker, 'beginYear'> {
  startOfCurrentWeek: Dayjs,
  onClickSelected: () => void,
  isSelected: boolean,
  startOfWeek: Dayjs,
}

export interface IWeekPicker {
  beginYear: Dayjs,
  endYear: Dayjs
}