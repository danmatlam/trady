import { IContent } from "../../store/schema";

export type Props = {
  data: IContent;
};

const FeaturedCard: React.FC<Props> = ({
  data: { id, slug, title, description, featured },
}) => {
  return (
    <a
      href="https://nextjs.org/docs"
      className={`
      w-full
      md:w-1/2
      px-4
      py-4
      m=rounded-xl 
      border 
      text-left 
      rounded-xl
      ${featured ? "app-green " : "bg-white"}
      ${featured ? "text-slate-50" : "text-gray-900"}
      
      `}
    >
      <div className="flex items-center  justify-between">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-4 text-base">{description}</p>
        </div>
        <div>
          <p className="text-2xl">&rarr;</p>
        </div>
      </div>
    </a>
  );
};

export default FeaturedCard;
