import tw from "twin.macro";
import { useClinicHours } from "../lib/userClinicHours";
import { translateToSpanish } from "../utils/translator";

export const ClinicHours: React.FC<{ times: string[] }> = ({ times }) => {
  const openingHours = times.length > 0 ? times : useClinicHours();
  const spanishOpeningHours = translateToSpanish(openingHours);

  return (
    <>
      <h2 tw="text-3xl font-semibold my-5">Horario</h2>

      <ul>
        {spanishOpeningHours.map((time) => (
          <li tw="text-base text-gray-500">{time}</li>
        ))}
      </ul>
    </>
  );
};
