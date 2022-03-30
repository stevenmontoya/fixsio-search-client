import tw from "twin.macro";
import _ from "lodash";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { useRouter } from "next/router";

const index_page = () => {
  const router = useRouter();

  const placeSelected = (lat, lng) => {
    router.push({
      pathname: "/clinics",
      query: { lat, lng },
    });

    return { lat, lng };
  };

  return (
    <>
      <Header />
      <section tw="relative w-full relative overflow-hidden antialiased">
        <div>
          <Input
            text={"Utilizar Ubicación actual"}
            placeholder={"¿Cuál es tu dirección?"}
            isExtended={true}
            placeSelected={(lat, lng) => placeSelected(lat, lng)}
          />
        </div>
      </section>
      <Features />

      <section tw="text-center">
        <h2 tw="text-4xl font-extrabold leading-tight text-gray-900 text-center mb-20">
          Encuentra miles de centros que te ayudarán
        </h2>
        <div tw="container mx-auto px-60 mb-20">
          <img src="map.svg" alt="" tw="text-center" />
        </div>
      </section>
      <section tw="py-10 bg-gray-50">
        <div tw="px-10 mx-auto max-w-7xl">
          <div tw="flex flex-col items-center sm:flex-row sm:justify-between"></div>
          <div tw="flex flex-col justify-between mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row">
            <p tw="mt-3 text-xs leading-tight text-gray-500 sm:mt-0">
              {" "}
              ©2022 Fixsio. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index_page;
