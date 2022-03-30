import tw from "twin.macro";
import { Clinic } from "../lib/useClinics";
import WalkingPersonIcon from "./icons/person";

export const LocalCard: React.FC<Clinic> = ({
  name,
  radius,
  rating,
  totalRatings,
  image,
  address,
  handleClick,
  id,
}) => {
  return (
    <>
      <div tw="mb-10" onClick={handleClick}>
        <div tw="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-2xl mx-auto border border-white bg-white">
          <div tw="w-full md:w-1/4 bg-white grid place-items-center">
            <img src={image} alt="tailwind logo" tw="rounded-xl" />
          </div>
          <div tw="w-full md:w-4/6 bg-white flex flex-col space-y-2 p-3">
            <div tw="flex justify-around items-center">
              <div tw="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tw="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p tw="text-gray-600 font-bold text-sm ml-1">
                  {rating}
                  <span tw="text-gray-500 font-normal">
                    ({totalRatings} reviews)
                  </span>
                </p>
              </div>
              <div tw="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tw="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <WalkingPersonIcon />
                </svg>
                <p tw="text-gray-600 font-bold text-sm ml-1">
                  <span tw="text-gray-500 font-normal">{radius}</span>
                </p>{" "}
              </div>
            </div>
            <h3 tw="font-black text-gray-800 md:text-lg text-xl">{name}</h3>
            <p tw="md:text-base text-gray-500 text-lg">{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};
