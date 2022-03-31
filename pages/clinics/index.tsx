import tw from "twin.macro";
import { Input } from "../../components/Input";
import { ClinicList } from "../../components/ClinicList";
import { MapPlaces, Map } from "../../components/Map/Map";
import { useRouter } from "next/router";
import { useClinics } from "../../lib/useClinics";
import { useState } from "react";

const index_map = () => {
  const router = useRouter();
  const {
    query: { lat, lng },
  } = router;

  const [coord, setCoordinates] = useState({ lat, lng });
  const { loading, clinics } = useClinics(coord.lat || lat, coord.lng || lng);
  const mapPlaces: MapPlaces = {
    lat: coord.lat || lat,
    lng: coord.lng || lng,
    clinics,
  };

  const setPlace = (lat, lng) => {
    setCoordinates({
      lat: lat?.toString() || lat,
      lng: lng?.toString() || lng,
    });
  };

  return (
    <>
      {!loading && (
        <section tw="flex justify-between">
          <div tw="mx-auto max-h-screen overflow-auto">
            <div tw="mt-10">
              <Input
                text={"Utilizar Ubicación actual"}
                placeholder={"¿Cuál es tu dirección?"}
                isExtended={false}
                placeSelected={(lat, lng) => setPlace(lat, lng)}
              />{" "}
            </div>
            <section tw="">
              <ClinicList clinics={clinics} />
            </section>
          </div>
          <Map {...mapPlaces} />
        </section>
      )}
    </>
  );
};

export default index_map;
