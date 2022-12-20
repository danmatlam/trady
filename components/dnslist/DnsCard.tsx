import { IContent, IDns } from "../../store/schema";

export type Props = {
  data: IDns;
};

const DnsCard: React.FC<Props> = ({
  data: { id, type, value, name, priority },
}) => {
  return (
    <a
      href="https://nextjs.org/docs"
      className={`
      w-full
      md:w-1/2
      p-4
      m=rounded-xl 
      border-2
      text-left 
      rounded-xl
      bg-gray-50
     
      `}
    >
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-1 row-span-1 flex flex-col mb-3">
          <span className="text-gray-400">Type:</span>
          <span className="font-bold">{type}</span>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col mb-3">
          <span className="text-gray-400">Value:</span>
          <span className="font-bold">{value}</span>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col mb-3">
          <span className="text-gray-400">Name:</span>
          <span className="font-bold">{name}</span>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col mb-3">
          <span className="text-gray-400">Priority:</span>
          <span className="font-bold">{priority}</span>
        </div>
      </div>
    </a>
  );
};

export default DnsCard;
