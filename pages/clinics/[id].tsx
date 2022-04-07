import { useRouter } from "next/router";
import tw from "twin.macro";
import { HeaderLogo } from "../../components/HeaderLogo";
import { ClinicServices } from "../../components/ClinicServices";
import { ClinicHours } from "../../components/ClinicHours";
import { ClinicInfo } from "../../components/ClinicInfo";
import { ClinicLocation } from "../../components/ClinicLocation";
import { useClinicInfo } from "../../lib/useClinicInfo";
import { ClinicContact } from "../../components/ClinicContact";

export const client_detail: React.FC = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { loading, clinicInfo } = useClinicInfo(id);

  return (
    <>
      {!loading && clinicInfo && (
        <>
          <HeaderLogo />
          <section tw="container mx-auto">
            <div tw="flex self-center justify-between">
              <div>
                <ClinicServices />
                <ClinicHours times={clinicInfo.openingHours} />
              </div>
              <div>
                <ClinicLocation
                  address={clinicInfo.address}
                  clinic={clinicInfo}
                />
                <ClinicContact phone={clinicInfo?.phone} />
              </div>
            </div>
            <ClinicInfo {...clinicInfo} />
          </section>
        </>
      )}
    </>
  );
};

export default client_detail;
