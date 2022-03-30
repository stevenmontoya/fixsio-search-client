import { LocalCard } from "./LocalCard";
import { useRouter } from "next/router";

export interface Clinics {
  clinics: any[];
}

export const ClinicList: React.FC<Clinics> = ({ clinics }) => {
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push({
      pathname: "/clinics/[id]",
      query: { id: id },
    });
  };

  return (
    <>
      {clinics.map((clinic) => (
        <LocalCard
          {...clinic}
          key={clinic.id}
          handleClick={(e) => handleClick(e, clinic.id)}
        />
      ))}
    </>
  );
};
