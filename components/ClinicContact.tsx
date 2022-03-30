import tw from "twin.macro";
import PhoneIcon from "./icons/phoneIcon";
import ScheduleIcon from "./icons/scheduleIcon";

export const ClinicContact = () => {
  const buttonWrapper = (children) => {
    return (
      <div tw="bg-indigo-100 pl-6 pr-6 pt-2 pb-2 rounded-lg">{children}</div>
    );
  };
  return (
    <>
      <div tw="flex justify-around">
        {buttonWrapper(<ScheduleIcon />)}
        {buttonWrapper(<PhoneIcon />)}
      </div>
    </>
  );
};
