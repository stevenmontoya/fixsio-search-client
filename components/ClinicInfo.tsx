import tw from "twin.macro";

interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
}

export const ClinicInfo: React.FC<ClinicInfo> = ({ name }) => {
  return (
    <section>
      {name && (
        <>
          <h2 tw="text-3xl font-semibold my-5">
            Información del centro {name}
          </h2>
          <p>
            El centro {name} ofrece numeros servicios de fisioterapia adaptados
            a tus necesidades
          </p>
        </>
      )}
    </section>
  );
};
