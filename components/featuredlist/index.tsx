import { IContent } from "../../store/schema";
import FeaturedCard from "./FeaturedCard";

export type Props = {
  data: IContent[];
};

const FeatureList: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex gap-3 flex-wrap md:flex-nowrap">
      {data.map((item) => (
        <FeaturedCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FeatureList;
