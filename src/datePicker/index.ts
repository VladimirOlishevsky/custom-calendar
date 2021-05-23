import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';
import { getGridDates } from '../DatePickerComponents';
import { StudentStatus } from '../DatePickerComponents/DatePickerCell/ColorCircles';
import { CellHighlightStyleNames, CellVariantStyleNames } from './types';
// import { addMonth } from './utils';


export class DatePickerState {
  dateCurrent = dayjs(new Date()).format('YYYY-MM-DD');
  dateSelected = '';
  monthDisplayed = this.dateCurrent;
  dates: string[] = getGridDates(this.monthDisplayed);
  datesHighlighted = new Map<string, StudentStatus[]>();
  // events: EventCardCollectionType = [];

  // private eventsService;

  constructor() {
    makeAutoObservable(this);
    // this.eventsService = new EventsService();
  }

  // * fetchEvents(params: EventsGetParams = {}): Generator {
  //   try {
  //     this.status = Status.Pending;
  //     const response = (yield this.eventsService.get(params)) as AxiosResponse<EventCardCollectionType>;
  //     this.status = Status.Fulfilled;
  //     this.events = response.data;
  //   } catch (error) {
  //     this.status = Status.Rejected;
  //   }
  // }

  setHighlightedDates = (dates: Map<string, StudentStatus[]>): void => {
    this.datesHighlighted.clear();
    this.datesHighlighted = dates;
  };

  getDayStatuses = (cellDate: string): StudentStatus[] => (
    this.datesHighlighted.get(cellDate) || []
  );

  // getCellHighlightStyle = (cellDate: string): CellHighlightStyleNames => (
  //   getCellHighlightStyle(this.datesHighlighted, cellDate)
  // );

  // getCellVariantStyle = (cellDate: string): CellVariantStyleNames => (
  //   getCellVariantStyle(this.monthDisplayed, this.dateSelected, cellDate)
  // );

  onPrevMonthClick = (): void => {
    // this.monthDisplayed = addMonth(this.monthDisplayed, -1);
    this.dates = getGridDates(this.monthDisplayed);
  };
  onNextMonthClick = (): void => {
    // this.monthDisplayed = addMonth(this.monthDisplayed, 1);
    this.dates = getGridDates(this.monthDisplayed);
  };

  onDateClick = (date: string): void => {
    const newDateSelected = this.dateSelected === date ? '' : date;
    this.dateSelected = newDateSelected;
  };
}
