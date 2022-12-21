import Image from "next/image";

export type Props = {};

const Share: React.FC<Props> = () => {
  return (
    <div
      className="w-full 
      flex items-center 
      justify-between
      my-6
      py-9
    bg-white  border-y-2 border-gray-100"
    >
      <h1 className="text-slate-800 text-lg mr-3 flex-1 ">
        Want to send these to a friend/colleague to do for you?
      </h1>
      <button className="app-green  hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-lg">
        Share &rarr;
      </button>
    </div>
  );
};

export default Share;
