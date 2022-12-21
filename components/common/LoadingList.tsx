export type Props = {};

const LoadingList: React.FC<Props> = () => {
  const items = [1, 2, 3, 4, 5, 6];
  const subItems = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-slate-500 text-lg my-3">
        looking up dns hos for domain
      </h1>
      <h2 className="text-3xl italic my-3">example.com</h2>
      <div className="h-2 rounded w-3/4 bg-gradient-to-r from-gray-300 to-gray-0 my-6" />
      <div className="grid gap-4 md:grid-cols-2 w-full flex-wrap my-3">
        {items.map((item) => (
          <div className="col-span-1 border border-gray-200 h-20 rounded-lg p-3">
            <div className="grid gap-4 grid-cols-2">
              {subItems.map((subItem) => (
                <div className="flex flex-col gap-1">
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-2 rounded w-3/4 bg-gradient-to-r from-gray-400 to-gray-0"></div>
                  </div>
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-2 rounded w-2/4 bg-gradient-to-r from-gray-300 to-gray-0"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadingList;
