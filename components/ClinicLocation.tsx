import tw from "twin.macro";
import { ClinicContact } from "./ClinicContact";
import { Map } from "../components/Map/Map";

interface ClinicLocation {
  address: string;
  clinic: { position };
}

export const ClinicLocation: React.FC<ClinicLocation> = ({
  address,
  clinic,
}) => {
  return (
    <div>
      <h2 tw="text-3xl font-semibold mt-5">Localización</h2>
      <div>
        <p>{address}</p>
      </div>
      <Map
        lat={`${clinic.position.lat}`}
        lng={`${clinic.position.lng}`}
        clinics={[clinic]}
        isInfo={true}
      />
      <ClinicContact />
    </div>
  );
};
