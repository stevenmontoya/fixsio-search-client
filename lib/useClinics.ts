import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { coordsAtom } from "../recoil/atom/coordsAtom";
import { clinicsAtom } from "../recoil/atom/clinicsAtom";

export interface Clinic {
  id: string;
  name: string;
  radius: string;
  rating: string;
  totalRatings: string;
  image: string;
  address: string;
  position: { lat: string; lng: string };
  handleClick?: (e: any) => void;
}

export const useClinics = (lat, lng) => {
  const [loading, setLoading] = useState(true);
  const [, setCoords] = useRecoilState(coordsAtom);
  const coords = useRecoilValue(coordsAtom);

  const [, setClinics] = useRecoilState(clinicsAtom);
  const clinics = useRecoilValue(clinicsAtom);

  const isEqualCoords = (lat, lng) => {
    return lat === coords.lat && lng === coords.lng;
  };

  const getPlacesData = () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/clinics`;

    if (isEqualCoords(lat, lng)) {
      setLoading(false);
      return clinics;
    }

    axios.post(baseUrl, { lat, lng }).then((res) => {
      setLoading(false);
      setClinics(res.data);
      setCoords({ lat, lng });
    });
  };

  useEffect(() => {
    if (lat && lng) {
      getPlacesData();
    }
  }, [lat, lng]);

  return { loading, clinics };
};
