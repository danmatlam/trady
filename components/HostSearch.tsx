import Image from "next/image";

export type Props = {
  loading: boolean;
};

const HostSearch: React.FC<Props> = ({ loading }) => {
  return (
    <div
      className="w-full p-4
    flex flex-row justify-center items-center rounded-xl
    gap-6
    "
      style={{ background: "#EDF2EA" }}
    >
      <h1 className="text-slate-600">Your DNS host is</h1>

      {!loading ? (
        <Image
          src="/google-domain.svg"
          alt="Trady Logo"
          width={124}
          height={21}
        />
      ) : (
        <div className="h-2 rounded w-1/4 bg-gradient-to-r from-gray-300 to-gray-0 my-6" />
      )}
    </div>
  );
};

export default HostSearch;
