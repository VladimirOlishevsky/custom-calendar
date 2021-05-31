import { Dayjs } from "dayjs";

export interface IDatePickerHeader extends Pick<IDatePickerBody, 'currentMonth' | 'beginYear' | 'endYear'> {
  prevMonthClick: () => void,
  nextMonthClick: () => void,
  isDatePicker: boolean,
}

export interface IDatePickerCell extends Pick<IDatePickerBody, 'currentMonth'>{
  cellDate: string,
  onClickSelected: () => void,
  isSelected: boolean,
}

export interface IDatePickerBody {
  currentMonth: Dayjs,
  setCurrentMonth: (el: Dayjs) => void,
  onClickSelected: (el: number, date: Dayjs) => void,
  selectedCell: number | null,
  beginYear?: Dayjs,
  endYear?: Dayjs,
}
