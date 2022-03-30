export const translateToSpanish = (textsToTranslate) => {
  const WEEK_DAYS = {
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
    Sunday: "Domingo",
  };

  const WEEK_DAYS_KEY = Object.keys(WEEK_DAYS);

  return textsToTranslate.map((openingHour, index) => {
    const englishWeekDay = WEEK_DAYS_KEY[index];
    return openingHour.replace(
      englishWeekDay.toString(),
      WEEK_DAYS[`${englishWeekDay}`]
    );
  });
};
