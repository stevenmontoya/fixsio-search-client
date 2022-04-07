import tw from "twin.macro";

interface Modal {
  infoToShow: string;
  onClose: () => void;
}

export const Modal: React.FC<Modal> = ({ infoToShow, onClose }) => {
  return (
    <>
      <div tw="bg-gray-500 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div tw="bg-white px-16 py-14 rounded-md text-center">
          <h1 tw="text-xl mb-4 font-bold text-gray-500">{infoToShow}</h1>
          <button
            tw="bg-purple-700 px-4 py-2 rounded-md text-base text-white"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
      ;
    </>
  );
};
