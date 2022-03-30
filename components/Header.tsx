import tw from "twin.macro";
import LineIcon from "./icons/lineIcon";
import { HeaderLogo } from "./HeaderLogo";

export const Header = () => {
  return (
    <section
      tw="relative overflow-hidden antialiased bg-white"
      x-data="{ mobileOpen: false }"
    >
      <HeaderLogo />
      <div tw="relative w-full">
        <div tw="flex flex-col max-w-6xl mx-auto lg:flex-row">
          <div tw="w-full py-20 pl-10 pr-10 lg:w-5/12 lg:py-32 lg:pr-0">
            <h1 tw="text-5xl font-black leading-tight text-black sm:text-6xl lg:pr-10">
              <span tw="relative inline-block">
                Encuentra la clínica de fisioterapía que mejor se adapte a tí
                <LineIcon />
              </span>
            </h1>
            <p tw="mt-5 text-lg text-gray-500 sm:text-xl lg:pr-10">
              Encontramos y te recomendamos la clínica más adecuada para tus
              necesidades
            </p>
          </div>
          <div tw="relative flex items-center justify-center max-w-xl pb-12 mx-auto lg:w-7/12 lg:pt-20 lg:pb-20">
            <img
              src="https://cdn.devdojo.com/images/august2021/3d-character.png"
              tw="relative w-2/3 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
