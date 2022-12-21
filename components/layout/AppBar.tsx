import Image from "next/image";

export type Props = {};

const AppBar: React.FC<Props> = () => {
  return (
    <div className="w-full h-12 flex items-center justify-center bg-white  border-b-2 border-gray-100">
      <a
        className="flex items-center justify-center gap-2"
        href="https://trady.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-slate-500 text-lg mr-3">Point your domain at</h1>
        <Image src="/trady.svg" alt="Trady Logo" width={72} height={16} />
      </a>
    </div>
  );
};

export default AppBar;
