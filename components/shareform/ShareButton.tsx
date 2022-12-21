import Image from "next/image";
import { useState } from "react";
import Modal from ".";

export type Props = {
  setOpen: (open: boolean) => void;
};

const ShareButton: React.FC<Props> = ({ setOpen }) => {
  return (
    <div
      className="w-full 
      flex items-center 
      justify-between
      my-6
      py-9
    bg-white  border-y-2 border-gray-100"
      onClick={() => setOpen(true)}
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

export default ShareButton;
