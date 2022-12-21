import Image from "next/image";

export type Props = {};

const DnsHostTitle: React.FC<Props> = () => {
  return (
    <div
      className="w-full p-4
    flex flex-row justify-center items-center rounded-xl
    gap-6
    "
      style={{ background: "#EDF2EA" }}
    >
      <h1 className="text-slate-600">Your DNS host is</h1>
      <Image
        src="/google-domain.svg"
        alt="Trady Logo"
        width={124}
        height={21}
      />
    </div>
  );
};

export default DnsHostTitle;
