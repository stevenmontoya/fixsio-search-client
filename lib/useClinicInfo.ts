import axios from "axios";
import { useEffect, useState } from "react";

export const useClinicInfo = (id) => {
  const [loading, setLoading] = useState(true);
  const [clinicInfo, setClinicInfo] = useState(null);

  const getClinicInfo = () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/clinics/${id}`;

    return axios.get(baseUrl).then((res) => {
      setClinicInfo(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (id) {
      getClinicInfo();
    }
  }, []);

  return { loading, clinicInfo };
};
