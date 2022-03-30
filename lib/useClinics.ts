import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [clinics, setClinics] = useState([]);

  const getPlacesData = () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/clinics`;
    
    axios.post(baseUrl, { lat, lng }).then((res) => {
      setLoading(false);
      setClinics(res.data);
    });
  };

  useEffect(() => {
    if (lat && lng) {
      getPlacesData();
    }
  }, [lat, lng]);

  return { loading, clinics };
};
