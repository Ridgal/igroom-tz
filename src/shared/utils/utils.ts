import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
  isValid,
  parseISO,
} from "date-fns";

type DateString = string | undefined;

export function formatIsoDate(isoDate?: DateString): string {
  if (!isoDate) return ""; // если undefined или пусто, возвращаем пустую строку

  const date = parseISO(isoDate);
  if (!isValid(date)) return ""; // если дата невалидная — тоже пустая строка

  const now = new Date();

  const diffDays = differenceInDays(now, date);
  const diffMonths = differenceInMonths(now, date);
  const diffYears = differenceInYears(now, date);

  if (diffDays < 1) {
    return format(date, "HH:mm");
  } else if (diffMonths < 1) {
    return `${diffDays} ${getDaysWord(diffDays)}`;
  } else {
    if (diffYears >= 1) {
      return `${diffYears} ${getYearsWord(diffYears)}`;
    }
    return `${diffMonths} ${getMonthsWord(diffMonths)}`;
  }
}

function getDaysWord(days: number): string {
  if (days % 10 === 1 && days % 100 !== 11) return "день";
  if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100))
    return "дня";
  return "дней";
}

function getMonthsWord(months: number): string {
  if (months % 10 === 1 && months % 100 !== 11) return "месяц";
  if ([2, 3, 4].includes(months % 10) && ![12, 13, 14].includes(months % 100))
    return "месяца";
  return "месяцев";
}

function getYearsWord(years: number): string {
  if (years % 10 === 1 && years % 100 !== 11) return "год";
  if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100))
    return "года";
  return "лет";
}

export const PROFILE_ID = "5e800be0-088e-41cb-b549-10ebf4a13591";