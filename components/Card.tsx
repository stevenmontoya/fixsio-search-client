import tw from "twin.macro";
import { Service } from "../lib/useServices";

export const Card: React.FC<Service> = ({ text, url }) => {
  return (
    <>
      <div tw="flex flex-col justify-center">
        <img src={url} alt="" tw="self-center mb-10" />
        <p tw="w-60">{text}</p>
      </div>
    </>
  );
};
