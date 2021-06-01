import dayjs, { Dayjs, ConfigType } from 'dayjs';


export const formatDate = (date: ConfigType, format: string) => dayjs(date).format(format);

export const getShortStringFromListOfDates = (
  days: Dayjs[],
) => days.map(date => formatDate(date, 'dd')
  .charAt(0).toUpperCase() + formatDate(date, 'dd').slice(1).toLowerCase())
  .join(', ');


export const sortByDate = (dateA: Dayjs, dateB: Dayjs, descending = false) => {
  if (dateA.isSame(dateB)) { return 0; }
  const comparator: Extract<keyof Dayjs, 'isAfter' | 'isBefore'> = descending ? 'isAfter' : 'isBefore';
  return dateA[comparator](dateB) ? -1 : 1;
};

export const arrayOfNumbersToDate = (arr: number[]) => {
  return dayjs(arr.join(' ')).toDate();
};

export const isFirstCell = (index: number) => Boolean(0 === index % 7);

export const getCalendarDates = (date: Dayjs): Dayjs[] => {

  const firstDayWeek = date.startOf('month').startOf('week').add(1, 'day');
  const lastDay = date.endOf('month').endOf('week').add(1, 'day');
  const diff = lastDay.diff(firstDayWeek, 'd');
  const dates = [];
  for (let i = 0; i <= diff; i += 1) {
    dates.push(firstDayWeek.add(i, 'day'));
  }
  return dates;
};

export const getWeekNumberFromStartOfPeriod = (
  startOfPeriod: ConfigType,
  anyDateFromTargetWeek: Dayjs,
) => anyDateFromTargetWeek
  .endOf('week')
  .diff(startOfPeriod, 'week') + 1;

export const isCurrentWeek = (startOfWeek: Dayjs, currentDay: Dayjs) => {
  return (
    currentDay.isBetween(startOfWeek, startOfWeek.endOf('week'), 'week', '[]')
  );
};

export const getWeekStart = (startOfWeek: Dayjs) => `${formatDate(startOfWeek.startOf('week').add(1, 'day'), 'DD')} ${formatDate(startOfWeek, 'MMM')}`;
export const getWeekEnd = (startOfWeek: Dayjs) => `
    ${formatDate(startOfWeek.endOf('week').add(1, 'day'), 'DD')}
    ${formatDate(startOfWeek.endOf('week').add(1, 'day'), 'MMM')}`;
