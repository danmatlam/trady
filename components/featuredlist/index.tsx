import { IContent } from "../../store/schema";
import FeaturedCard from "./FeaturedCard";

export type Props = {
  data: IContent[];
};

const FeatureList: React.FC<Props> = ({ data }) => {
  return (
    <section>
      <h1 className="text-slate-500 text-lg my-3">
        How do you want to update your DNS?
      </h1>
      <div className="flex gap-3 flex-wrap md:flex-nowrap">
        {data.map((item) => (
          <FeaturedCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeatureList;
