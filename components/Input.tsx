import tw from "twin.macro";
import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";
import { useGeolocation } from "../lib/useGeolocation";

export const Input = ({ placeholder, text, isExtended, placeSelected }) => {
  const [alloweLocation, setAllowedLocation] = useState(false);
  const { position, isLocationLoading } = useGeolocation(alloweLocation);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      setAllowedLocation(true);
    }
  };

  const ResponseiveWrapper = (children) => {
    return isExtended ? (
      <div tw="container mx-auto w-4/12 mb-10">{children}</div>
    ) : (
      <div tw="container mx-auto w-4/12 md:w-4/6 mb-10">{children}</div>
    );
  };

  useEffect(() => {
    if (position) {
      setAllowedLocation(false);
      placeSelected(position.lat, position.lng);
    }
  }, [position]);

  return (
    <>
      {ResponseiveWrapper(
        <div tw="rounded-lg bg-white shadow flex w-full h-14">
          <Autocomplete
            onPlaceSelected={(place) =>
              placeSelected(
                place?.geometry?.location.lat(),
                place?.geometry?.location.lng()
              )
            }
            language="es"
            tw="w-full rounded-tl-lg rounded-bl-lg py-2 px-4 focus:outline-none"
            options={{
              types: [],
              componentRestrictions: { country: "es" },
            }}
            placeholder={placeholder}
          />
          {isExtended ? (
            <button
              tw="rounded-tr-lg rounded-br-lg py-2 px-4"
              onClick={() => getLocation()}
            >
              <p tw="font-semibold text-purple-700 text-sm w-60">
                {isLocationLoading ? (
                  <img
                    src="search-icon.svg"
                    alt="search-icon"
                    tw="h-5 inline mr-4 animate-bounce"
                  />
                ) : (
                  <img
                    src="search-icon.svg"
                    alt="search-icon"
                    tw="h-5 inline mr-4"
                  />
                )}
                {text}
              </p>
            </button>
          ) : (
            <button
              tw="rounded-tr-lg rounded-br-lg py-2 px-4"
              onClick={() => getLocation()}
            >
              <p tw="font-semibold text-purple-700 text-sm w-10">
                {isLocationLoading ? (
                  <img
                    src="search-icon.svg"
                    alt="search-icon"
                    tw="h-5 inline mr-4 animate-bounce"
                  />
                ) : (
                  <img
                    src="search-icon.svg"
                    alt="search-icon"
                    tw="h-5 inline mr-4"
                  />
                )}
              </p>
            </button>
          )}
        </div>
      )}
    </>
  );
};
