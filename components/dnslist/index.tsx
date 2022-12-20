import { IContent, IDns } from "../../store/schema";
import DnsCard from "./DnsCard";
import FeaturedCard from "./DnsCard";

export type Props = {
  data: IDns[];
};

const DnsList: React.FC<Props> = ({ data }) => {
  return (
    <div
      className={`
      flex
      gap-3
      flex-wrap  
      md:flex-nowrap
      `}
    >
      {data.map((item) => (
        <DnsCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default DnsList;
