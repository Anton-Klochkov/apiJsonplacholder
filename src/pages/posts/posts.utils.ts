export const transformDate = (prevDate: string): string => {
  const date: RegExpMatchArray | null = prevDate.match(
    /(?<day>\d{2}).?(?<month>\d{2}).?(?<year>\d{4}).?(?<hour>\d{2})?.?(?<minutes>\d{2})?/,
  );

  let newDate;
  if (date) {
    const group = date['groups'];

    newDate = `${group?.year}-${group?.month}-${group?.day}`;

    if (group?.hour) {
      newDate = `${group?.year}-${group?.month}-${group?.day}T${group?.hour}:${group?.minutes}`;
    }
  }
  return newDate !== undefined ? newDate : '';
};

export const oldDate = (oldDay: number) => {
  const endDate = new Date();
  return endDate.setDate(endDate.getDate() - oldDay);
};
