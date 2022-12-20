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
      p-6
      mr-3
      my-6 m=rounded-xl border text-left 
      rounded-xl
      md:w-1/3
      ${featured ? "bg-teal-900" : "bg-white"}
      ${featured ? "text-slate-50" : "text-gray-900"}
      `}
    >
      <div className="flex items-center ">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-4 text-xl">{description}</p>
        </div>
        <div>
          <p className="text-2xl">&rarr;</p>
        </div>
      </div>
    </a>
  );
};

export default FeaturedCard;
