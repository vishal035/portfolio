export function FormatDate(dateString: string): string {
  const date = new Date(dateString).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return date;
}

export function CategoryMAke(Title: string): string {
  if (typeof Title === 'string') {
    return Title.trim()
      .split('-')
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');
  }

  return 'Undefined';
}

export const Debounce = (
  fn: (query: string) => void,
  timeOut: number = 300
) => {
  let timer: NodeJS.Timeout;

  const debounce = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeOut);
  };

  return debounce;
};
