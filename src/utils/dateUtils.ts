// dateUtils.ts

export const convertDateFormat = (originalDate: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = new Date(originalDate).toLocaleDateString('vi-VN', options);
  return formattedDate;
};
