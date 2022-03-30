export interface Service {
  url: string;
  text: string;
  id: number;
}

export const useServices = (): Service[] => {
  return [
    {
      id: 1,
      url: "lupa.svg",
      text: "Busca tu clínica en función de tus preferencias",
    },
    {
      id: 2,
      url: "compare.svg",
      text: "Compara entre diversos centros ",
    },
    {
      id: 3,
      url: "dashboard.svg",
      text: "Selecciona el que mejor se adapta a tus necesidades",
    },
  ];
};
