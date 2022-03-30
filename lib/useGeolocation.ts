import { useState } from "react";

export interface Location {
  position: { lat: string; lng: string };
  isLocationLoading;
}

export const useGeolocation = (control): Location => {
  const [position, setCoords] = useState(null);
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
