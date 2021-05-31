import { Dayjs } from "dayjs";

export interface IWeekItem {
  startOfCurrentWeek: Dayjs,
  onClickSelected: () => void,
  isSelected: boolean,
  startOfWeek: Dayjs,
  beginYear: Dayjs,
}
