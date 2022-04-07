import { useState } from "react";
import { useRecoilState } from "recoil";
import { coordsAtom } from "../recoil/atom/coordsAtom";

export interface Location {
  position: { lat: string; lng: string };
  isLocationLoading;
}

export const useGeolocation = (control): Location => {
  const [position] = useState(null);
  const [, setCoords] = useRecoilState(coordsAtom)

  const [isLocationLoading, setLoading] = useState(true);

  if (!control) {
    return { isLocationLoading: false, position };
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      setCoords({
        lat: position.coords.latitude.toString(),
        lng: position.coords.longitude.toString(),
      });
      setLoading(false);
    },
    () => {
      console.log("Unable to retrieve your location");
    }
  );

  return { position, isLocationLoading };
};
