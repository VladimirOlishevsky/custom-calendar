import { IDatePickerBody } from "../DatePicker/types";

export interface IPickerHeader extends Pick<IDatePickerBody, 'currentMonth' | 'beginYear' | 'endYear' | 'disabledHeader' | 'setCurrentMonth' | 'setSelectedCell'> {
    isDatePicker: boolean,
}