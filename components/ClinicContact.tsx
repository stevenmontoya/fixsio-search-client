import { useState } from "react";
import tw from "twin.macro";
import PhoneIcon from "./icons/phoneIcon";
import ScheduleIcon from "./icons/scheduleIcon";
import { Modal } from "./Modal";
import contants from "../utils/contants.json";

interface ClinicContact {
  phone: string;
}

export const ClinicContact: React.FC<ClinicContact> = ({ phone }) => {
  const [infoToShow, setInfoToShow] = useState(null);

  const handleCloseModal = () => {
    setInfoToShow(null);
  };

  const handleClinicContact = (infoToShow) => {
    setInfoToShow(infoToShow);
  };

  const buttonWrapper = (children, infoToShow) => {
    return (
      <div
        tw="bg-indigo-100 pl-6 pr-6 pt-2 pb-2 rounded-lg"
        onClick={() => handleClinicContact(infoToShow)}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <div tw="flex justify-around mt-10">
        {buttonWrapper(<PhoneIcon />, contants.ModalPhoneText + phone)}
      </div>
      {infoToShow && (
        <Modal infoToShow={infoToShow} onClose={handleCloseModal} />
      )}
    </>
  );
};
