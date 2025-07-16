import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import TopPicks from "./TopPicks";
import Accordion from "./Accordion";
import MultiAccordion from "./MultiAccordion";

function RestaurantMenu() {
  const { restid } = useParams();
  const restInfo = useRestaurantMenu(restid);

  if (!restInfo) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restInfo?.cards[2]?.card?.card?.info || {};

  // Extract parts for TopPicks and Accordion
  const regularCards =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="MainContainer min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 py-10 px-2">
      <div className="restaurantInfo flex flex-col items-center w-full mb-10">
        <div className="info w-full max-w-3xl border-slate-200 border-2 rounded-3xl p-8 bg-white shadow-2xl">
          <h1 className="text-3xl font-extrabold pb-4 text-center text-emerald-600 tracking-tight">
            {name}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-slate-200 border-2 rounded-2xl shadow-lg w-full p-5 bg-slate-50">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center text-lg font-semibold">
                <span className="text-emerald-600">⭐ {avgRating}</span>
                <span className="text-slate-500">({totalRatingsString})</span>
                <span className="text-slate-700">• {costForTwoMessage}</span>
              </div>
              <div className="cuisines text-slate-700 font-medium">
                {cuisines?.join(", ")}
              </div>
              <div className="outlet text-slate-500">{areaName}</div>
              <div className="deliveryTime text-emerald-600 font-semibold">
                {sla?.slaString} Delivery Time
              </div>
            </div>
            <div className="hidden md:block border-l-2 border-slate-200 h-20 mx-6"></div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-lg font-bold text-emerald-400">
                Enjoy your meal!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="topPicks flex justify-center mb-10">
        <TopPicks regularCards={regularCards} />
      </div>

      <div className="acc mb-10">
        <Accordion regularCards={regularCards} />
      </div>

      <div className="MutliAcc mb-10">
        <MultiAccordion regularCards={regularCards} />
      </div>
    </div>
  );
}

export default RestaurantMenu;
