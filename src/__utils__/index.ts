import dayjs, { Dayjs, ConfigType } from 'dayjs';


export const formatDate = (date: ConfigType, format: string) => dayjs(date).locale('ru').format(format);

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

export const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const isFirstCell = (index: number) => Boolean(0 === index % 7);

export const getCalendarDates = (date: Dayjs): string[] => {
  const dateObj = dayjs(date);

  const firstDayWeek = dayjs(dateObj).startOf('month').startOf('week').add(1, 'day');
  const lastDay = dayjs(dateObj).endOf('month').endOf('week').add(1, 'day');
  const diff = lastDay.diff(firstDayWeek, 'd');
  const dates = [];
  for (let i = 0; i <= diff; i += 1) {
    dates.push(firstDayWeek.add(i, 'day').format('YYYY-MM-DD'));
  }
  return dates;
};

export const getWeekNumberFromStartOfPeriod = (
  startOfPeriod: ConfigType,
  anyDateFromTargetWeek: Dayjs,
) => anyDateFromTargetWeek
  .endOf('week')
  .diff(startOfPeriod, 'week') + 1;


export const prevMonthClick = (currentDate: Dayjs, setCurrentDate: (el: Dayjs) => void) => {
  setCurrentDate(dayjs(currentDate).add(-1, 'month'));
};
export const nextMonthClick = (currentDate: Dayjs, setCurrentDate: (el: Dayjs) => void) => {
  setCurrentDate(dayjs(currentDate).add(1, 'month'));
};

export const isCheckToday = (someDate: Dayjs) => {
  const today = new Date();
  return dayjs(someDate).get('date') === today.getDate()
    && dayjs(someDate).get('month') === today.getMonth()
    && dayjs(someDate).get('year') === today.getFullYear();
};

export const isCurrentWeek = (startOfWeek: Dayjs, currentDay: Dayjs) => {
  return (
    (dayjs(currentDay).isSame(dayjs(startOfWeek)) || dayjs(currentDay).isAfter(dayjs(startOfWeek)))
    && (dayjs(currentDay).isSame(dayjs(startOfWeek).endOf('week').add(1, 'day')) || dayjs(currentDay).isBefore(dayjs(startOfWeek).endOf('week').add(1, 'day')))
  );
};

export const getWeekStart = (startOfWeek: Dayjs) => `${formatDate(dayjs(startOfWeek).startOf('week').add(1, 'day'), 'DD')} ${formatDate(dayjs(startOfWeek), 'MMM')}`;
export const getWeekEnd = (startOfWeek: Dayjs) => `
    ${formatDate(dayjs(startOfWeek).endOf('week').add(1, 'day'), 'DD')}
    ${formatDate(dayjs(startOfWeek).endOf('week').add(1, 'day'), 'MMM')}`;
