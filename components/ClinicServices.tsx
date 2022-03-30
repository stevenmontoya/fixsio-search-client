import tw from "twin.macro";
import { useClinicServices } from "../lib/useClinicServices";

export const ClinicServices = () => {
  const services = useClinicServices();

  return (
    <>
      <h2 tw="text-3xl font-semibold my-5">Terapias</h2>

      <ul>
        {services.map((service) => (
          <li tw="text-base text-gray-500">{service.name}</li>
        ))}
      </ul>
    </>
  );
};
