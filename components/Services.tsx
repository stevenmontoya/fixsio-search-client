import tw from "twin.macro";
import { useServices } from "../lib/useServices";
import { Card } from "./Card";

export const Services = () => {
  const services = useServices();

  return (
    <>
      <div tw="flex justify-around container mx-auto p-10">
        {services.map((service) => (
          <Card {...service} key={service.id} />
        ))}
      </div>
    </>
  );
};  
