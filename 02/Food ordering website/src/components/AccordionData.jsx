import { useState } from "react";
import { ACC_URL } from "../utils/constants";
import { useStore } from "../utils/store";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionData = ({ itemCategory }) => {
  const [shownDescriptions, setShownDescriptions] = useState({});
  const { setAddItem, setRemoveItem, cart, qty } = useStore();

  return (
    <div className="dishes-list flex flex-col w-full max-w-4xl mx-auto">
      {itemCategory?.map((item, catIndex) =>
        item.card.card.itemCards?.map((dish, dishIndex) => {
          const key = `${catIndex}-${dishIndex}`;
          const isDescriptionShown = shownDescriptions[key];
          const info = dish.card.info;
          return (
            <div
              key={key}
              className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 mb-6 border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex-1 pr-6">
                <div className="font-bold text-xl text-slate-800 mb-1">
                  {info.name}
                </div>
                <div className="font-semibold text-slate-700 mb-1">
                  ₹
                  {info.defaultPrice
                    ? info.defaultPrice / 100
                    : info.price / 100}
                </div>
                <div className="text-emerald-600 font-bold mb-1">
                  {info.ratings?.aggregatedRating?.rating || "-"}
                  {info.ratings?.aggregatedRating?.rating && (
                    <span className="text-slate-500 font-normal ml-1">
                      ({info.ratings.aggregatedRating.ratingCountV2 || 0})
                    </span>
                  )}
                </div>
                <div
                  className={`text-slate-700 mb-2 ${
                    isDescriptionShown ? "" : "line-clamp-2"
                  }`}
                >
                  {info.description}
                </div>
                <button
                  onClick={() =>
                    setShownDescriptions((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }))
                  }
                  className="text-emerald-600 font-semibold hover:underline text-sm mb-2"
                >
                  {isDescriptionShown ? "Show Less" : "Show More"}
                </button>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <img
                  className="w-24 h-24 rounded-xl object-cover mb-2 border border-slate-200"
                  src={ACC_URL + info.imageId}
                  alt={info.name}
                />
                {!cart.includes(info.id) ? (
                  <button
                    className="px-6 py-1 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
                    onClick={() => setAddItem(info.id)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-emerald-100 border-2 border-emerald-600 rounded-lg px-2 py-1">
                    <button
                      className="text-emerald-600 hover:text-emerald-800"
                      onClick={() => setRemoveItem(info.id, qty)}
                    >
                      <FaMinus />
                    </button>
                    <span className="font-bold text-emerald-700">
                      {qty[info.id] || 1}
                    </span>
                    <button
                      className="text-emerald-600 hover:text-emerald-800"
                      onClick={() => setAddItem(info.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AccordionData;
