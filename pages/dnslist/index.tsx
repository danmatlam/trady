import { IContent } from "../../store/schema";
import FeaturedCard from "./FeaturedCard";

export type Props = {
  data: IContent[];
};

const FeatureList: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <FeaturedCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FeatureList;
