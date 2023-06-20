import Image from "next/image";
import Icon from "@/assets/icon.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 py-24 text-black max-sm:py-12 max-sm:gap-5">
      <Image className="rounded-2xl" src={Icon} width={200} height={200} alt="Icon" />
      <h1 className="text-5xl text-center max-sm:text-4xl">
        Privacy Policy for <span className="whitespace-nowrap max-sm:text-3xl">Hitta Uppkörningstider</span>
      </h1>
      <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
        <Text title={"Personal Information Collection"}>
          Hitta Uppkörningstider collects and stores the user's location data to identify nearby cities. No additional
          personal information is collected or stored.
        </Text>
        <Text title={"Use of Personal Information"}>
          The collected location information is solely used to provide driving test times in the cities closest to the
          user. No personal information is shared with third parties.
        </Text>
        <Text title={"Security of Personal Information"}>
          Hitta Uppkörningstider ensures the security of collected personal information by storing and processing it
          locally on the user's device. No data is transmitted to external servers.
        </Text>
        <Text title={"Retention of Personal Information"}>
          Hitta Uppkörningstider does not retain any personal information. The location data is used solely for
          real-time processing and is not stored after the app is closed.
        </Text>
        <Text title={"Cookies and Tracking Technologies"}>
          Hitta Uppkörningstider may use cookies or similar tracking technologies for advertising purposes. These
          technologies help personalize the user experience but do not collect personal information.
        </Text>
        <Text title={`User's Rights`}>
          Users have the right to access, update, and delete their personal information. However, since Hitta
          Uppkörningstider does not collect or store personal information, these rights do not apply.
        </Text>
        <Text title={"Changes to the Privacy Policy"}>
          Any changes or updates to this privacy policy will be notified within the app. It is recommended to regularly
          review this policy for any modifications.
        </Text>
      </div>
    </main>
  );
}

const Text = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="text-center mb-5">
    <p className="text-2xl font-semibold">{title}</p>
    <p className="text-2xl">{children}</p>
  </div>
);
