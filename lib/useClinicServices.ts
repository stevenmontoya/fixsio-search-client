export interface Service {
  name: string;
}

export const useClinicServices = (): Service[] => {
  return [
    {
      name: "Fisioterapia",
    },
    {
      name: "Fendelcraust",
    },
    {
      name: "Rehabilitaciones",
    },
    {
      name: "Fortalecimientos",
    },
  ];
};
