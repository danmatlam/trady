import { IContent, IDns } from "../../store/schema";
import DnsCard from "./DnsCard";
import FeaturedCard from "./DnsCard";

export type Props = {
  data: IDns[];
};

const DnsList: React.FC<Props> = ({ data }) => {
  return (
    <section>
      <h1 className="text-slate-500 text-lg my-3">
        Are you a PRO at DNS? Update these records
      </h1>
      <div className="flex  gap-3  flex-wrap   md:flex-nowrap">
        {data.map((item) => (
          <DnsCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default DnsList;
