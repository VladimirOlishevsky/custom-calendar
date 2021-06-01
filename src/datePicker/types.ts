import { Dayjs } from "dayjs";

export interface IDatePickerHeader extends Pick<IDatePickerBody, 'currentMonth' | 'beginYear' | 'endYear'> {
  prevMonthClick: () => void,
  nextMonthClick: () => void,
  isDatePicker: boolean,
}

export interface IDatePickerCell extends Pick<IDatePickerBody, 'currentMonth'>{
  cellDate: Dayjs,
  onClickSelected: () => void,
  isSelected: boolean,
}

export interface IDatePickerBody extends Pick<IDatePicker, 'beginYear' | 'endYear'> {
  currentMonth: Dayjs,
  setCurrentMonth: (el: Dayjs) => void,
  onClickSelected: (el: number, date: Dayjs) => void,
  selectedCell: number | null,
  disabledHeader?: boolean,
  setSelectedCell: (el: number | null) => void
}

export interface IDatePicker {
  beginYear?: Dayjs,
  endYear?: Dayjs,
}