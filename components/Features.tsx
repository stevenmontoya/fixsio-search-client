import tw from "twin.macro";

export const Features = () => {
  return (
    <section tw="pt-20 pb-32 bg-white">
      <div tw="max-w-4xl px-20 mx-auto">
        <h2 tw="mb-1 text-4xl font-extrabold leading-tight text-gray-900 text-center">
          Búsca, compara y elige
        </h2>
        <div tw="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-x-10 lg:gap-x-24 gap-y-20">
          <div>
            <svg
              tw="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </svg>
            <h3 tw="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
              Búsca
            </h3>
            <p tw="text-sm text-gray-500 lg:text-base">
              Busca tu clínica en función de tus preferencias
            </p>
          </div>

          <div tw="">
            <svg
              tw="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <h3 tw="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
              Compara
            </h3>
            <p tw="text-sm text-gray-500 lg:text-base">
              Compara entre diversos centros
            </p>
          </div>

          <div tw="">
            <svg
              tw="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <h3 tw="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
              Elige
            </h3>
            <p tw="text-sm text-gray-500 lg:text-base">
              Selecciona el que mejor se adapta a tus necesidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
