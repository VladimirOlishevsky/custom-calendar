import dayjs from "dayjs";

export const a = 1

// import { DateFormats } from 'constants/dateFormats';
// import {
//   isSameDay as isSameDayFNS,
//   isSameMonth as isSameMonthFNS,
//   isToday as isTodayFNS,
//   startOfWeek,
//   endOfWeek,
//   lastDayOfMonth,
//   setDate,
//   differenceInDays,
//   add,
//   isLastDayOfMonth,
//   isFirstDayOfMonth,
//   isMonday,
//   isSunday,
//   format,
// } from 'date-fns';
// import type { CellVariantStyleNames, CellHighlightStyleNames } from './types';


// export const addMonth = (date: string, step: number): string => dayjs().add(dayjs(date), step);

// export const getGridDates = (date: string): string[] => {
//   const dateObj = new Date(date);

//   const firstGridDate = startOfWeek(setDate(dateObj, 1), { weekStartsOn: 1 });
//   const lastGridDate = endOfWeek(lastDayOfMonth(dateObj), { weekStartsOn: 1 });
//   const daysCount = differenceInDays(lastGridDate, firstGridDate);

//   const dates = [];
//   for (let i = 0; i <= daysCount; i += 1) {
//     dates.push(format(add(firstGridDate, { days: i }), DateFormats.isoDate));
//   }

//   return dates;
// };

// export const getCellVariantStyle = (
//   monthDisplayed: string,
//   dateSelected: string,
//   cellDate: string,
// ): CellVariantStyleNames => {
//   const cellDateObj = new Date(cellDate);
//   const isSameMonth = isSameMonthFNS(cellDateObj, new Date(monthDisplayed));
//   const isSameDay = isSameMonth && isSameDayFNS(cellDateObj, new Date(dateSelected));
//   const isToday = isSameMonth && isTodayFNS(cellDateObj);

//   switch (true) {
//     case isSameDay: return 'selected';
//     case isToday: return 'current';
//     case isSameMonth: return 'default';
//     default: return 'disabled';
//   }
// };

// export const getCellHighlightStyle = (
//   eventDates: Map<string, string[]>,
//   cellDate: string,
// ): CellHighlightStyleNames => {
//   const dateObj = new Date(cellDate);

//   const dateCurrent = format(dateObj, DateFormats.isoDate);
//   const datePrev = format(add(dateObj, { days: -1 }), DateFormats.isoDate);
//   const dateNext = format(add(dateObj, { days: 1 }), DateFormats.isoDate);

//   const hasntEvents = Boolean(!eventDates?.get(dateCurrent));
//   const hasntEventsPrev = Boolean(!eventDates?.get(datePrev));
//   const hasntEventsNext = Boolean(!eventDates?.get(dateNext));

//   const sideItemSelector: CellHighlightStyleNames[] = [];

//   if (hasntEvents) {
//     return 'unset';
//   }

//   if (hasntEventsPrev || isMonday(dateObj) || isFirstDayOfMonth(dateObj)) {
//     sideItemSelector.push('first');
//   }
//   if (hasntEventsNext || isSunday(dateObj) || isLastDayOfMonth(dateObj)) {
//     sideItemSelector.push('last');
//   }

//   switch (true) {
//     case (sideItemSelector.length === 0): return 'middle';
//     case (sideItemSelector.length === 1): return sideItemSelector[0] as 'last' | 'first';
//     case (sideItemSelector.length === 2): return 'single';
//     default: return 'unset';
//   }
// };
