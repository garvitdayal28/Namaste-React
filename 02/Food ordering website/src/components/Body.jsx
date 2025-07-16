import RestaurantCards, { PureVeg } from "./RestaurantCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";
import useRestaurantCard from "../utils/useRestaurantCard";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [heading, setHeading] = useState(
    "Restaurants with online food delivery in Jabalpur"
  );
  const [searchText, setsearchText] = useState("");
  const [topRatedActive, setTopRatedActive] = useState(false);

  const { restList, filteredRestList, setFilteredRestList } =
    useRestaurantCard();

  const VegRestaurantCard = PureVeg(RestaurantCards);

  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="searchBarContainer flex justify-center items-center mt-8 mb-6 w-full">
        <div className="relative w-1/2">
          <input
            type="text"
            className="searchBar border-2 border-red-200 p-4 pr-24 pl-6 rounded-full w-full shadow-md focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
            placeholder="What do you want to eat?"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const searchFilter = restList.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRestList(searchFilter);
              }
            }}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-red-400 hover:bg-red-500 text-white font-bold rounded-full shadow-md flex items-center gap-2 transition-all"
            onClick={() => {
              const searchFilter = restList.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestList(searchFilter);
            }}
          >
            <span>Search</span>
            <FaSearch className="text-sm" />
          </button>
        </div>
      </div>

      <div className="textContainer flex justify-between items-center pt-4 px-12 mb-4">
        <h2 className="text-2xl font-bold text-gray-700">{heading}</h2>

        <button
          className={`px-4 py-2 border-2 rounded-full flex items-center gap-2 shadow-md transition-all
            ${
              topRatedActive
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-red-500 border-red-400 hover:bg-red-500 hover:text-white"
            }`}
          onClick={() => {
            if (!topRatedActive) {
              setHeading("Top Rated Restaurants");
              setFilteredRestList(
                restList
                  .filter((rest) => rest.info.avgRating > 4.4)
                  .sort((a, b) => b.info.avgRating - a.info.avgRating)
              );
            } else {
              setHeading("Restaurants with online food delivery in Jabalpur");
              setFilteredRestList(restList);
            }
            setTopRatedActive(!topRatedActive);
          }}
        >
          <span className="font-bold">Top Rated Restaurants</span>
          {topRatedActive && <BsXCircle />}
        </button>
      </div>

      <div className="cardsContainer flex flex-wrap pt-7 justify-center">
        {filteredRestList.map((restaurant) =>
          restaurant?.info ? (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant?.info?.badges?.imageBadges?.some(
                (badge) => badge.description?.toLowerCase() === "pureveg"
              ) ? (
                <VegRestaurantCard restData={restaurant} />
              ) : (
                <RestaurantCards restData={restaurant} />
              )}
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
