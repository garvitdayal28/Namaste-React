import { TP_URL } from "../utils/constants";

const TopPicks = ({ regularCards }) => {
  const topPicks = regularCards[1]?.card?.card;

  if (!topPicks) {
    return <div>Loading Top Picks...</div>;
  }

  return (
    <div className="container flex flex-col items-center">
      <div className="heading text-2xl font-semibold text-emerald-700 mb-2">
        {topPicks.title}
      </div>
      <div className="divfood w-full overflow-x-auto">
        <div className="cards flex mt-6">
          {topPicks.carousel.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] border-2 border-slate-200 m-4 rounded-2xl relative bg-white shadow-md hover:border-emerald-400 transition-all"
            >
              <a className="absolute bottom-2 left-2 text-white bg-emerald-600 bg-opacity-80 px-2 py-0.5 rounded">
                {"₹" + item?.dish.info.defaultPrice / 100}
              </a>
              <img
                className="w-full h-48 object-cover rounded-2xl"
                src={TP_URL + item.creativeId}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
