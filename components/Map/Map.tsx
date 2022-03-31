import tw from "twin.macro";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from "./mapStyles";

const containerStyle = {
  width: "50vw",
  height: "100vh",
};

const containerStyleInfo = {
  width: "30vw",
  height: "30vh",
};

const options = {
  scrollwheel: false,
  styles: mapStyles,
  streetViewControl: false,
};

export interface MapPlaces {
  lat: string | string[];
  lng: string | string[];
  clinics?: any[];
  isInfo?: boolean;
}

export const Map: React.FC<MapPlaces> = ({
  lat,
  lng,
  clinics,
  isInfo = false,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const normalizeCoordinate = (coordinate) => {
    return typeof lat === "string" ? parseFloat(coordinate.valueOf()) : 0;
  };

  const obtainCenter = () => ({
    lat: normalizeCoordinate(lat),
    lng: normalizeCoordinate(lng),
  });

  const obtainContainerStyle = () => {
    if (isInfo) {
      return containerStyleInfo;
    }

    return containerStyle;
  };

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={obtainContainerStyle()}
        center={obtainCenter()}
        zoom={15}
        options={options}
      >
        {clinics.map((clinic, index) => (
          <Marker key={index} position={clinic.position} />
        ))}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? renderMap() : <div>cargando</div>;
};
