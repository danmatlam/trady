import Image from "next/image";

export type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="w-full h-12 flex items-center justify-center bg-white  border-b-2 border-gray-100">
      <a
        className="flex items-center justify-center gap-2"
        href="https://trady.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/trady-light.svg" alt="Trady Logo" width={72} height={16} />
      </a>
    </footer>
  );
};

export default Footer;
