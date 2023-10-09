import dayjs, { type ManipulateType } from 'dayjs';

export const TimesInMilliseconds = {
  ['1s']: 1000,
  ['1m']: 1000 * 60,
  ['5m']: 1000 * 60 * 5,
  ['10m']: 1000 * 60 * 10,
  ['30m']: 1000 * 60 * 30,
  ['1h']: 1000 * 60 * 60,
  ['1d']: 1000 * 60 * 60 * 24,
  ['1w']: 1000 * 60 * 60 * 24 * 7,
  ['1y']: 1000 * 60 * 60 * 24 * 365,
};

export const formatDate = (date?: Date | string, format?: string): string => {
  // if format not data, convert
  if (!date) return ``;

  if (typeof date === 'string') date = new Date(date);

  if (!date || !dayjs(date).isValid()) {
    return '';
  }
  // define month/year format
  if (!format) {
    format = 'MM/YYYY';
  }

  return dayjs(date).format(format);
};

export const getCurrentDate = (): Date => dayjs().toDate();

export const addTime = (
  date: Date | undefined,
  amount: number,
  unit: ManipulateType,
): Date => {
  if (!date || !dayjs(date).isValid()) {
    return new Date('');
  }

  return dayjs(date).add(amount, unit).toDate();
};

export const subtractTime = (
  date: Date | undefined,
  amount: number,
  unit: ManipulateType,
): Date => {
  if (!date || !dayjs(date).isValid()) {
    return new Date('');
  }

  return dayjs(date).subtract(amount, unit).toDate();
};

// Check if a Date is Before/After Another Date
export const isBefore = (
  date1: Date | undefined,
  date2: Date | undefined,
): boolean => {
  if (!date1 || !date2 || !dayjs(date1).isValid() || !dayjs(date2).isValid()) {
    return false;
  }

  return dayjs(date1).isBefore(date2);
};

export const isAfter = (
  date1: Date | undefined,
  date2: Date | undefined,
): boolean => {
  if (!date1 || !date2 || !dayjs(date1).isValid() || !dayjs(date2).isValid()) {
    return false;
  }

  return dayjs(date1).isAfter(date2);
};
