import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";
import useRestaurantCard from "../utils/useRestaurantCard";

const Body = () => {
  
  const [heading, setHeading] = useState(
    "Restaurants with online food delivery in Jabalpur"
  );
  const [searchText, setsearchText] = useState("");
  const [topRatedActive, setTopRatedActive] = useState(false);

  const { restList, filteredRestList, setFilteredRestList } = useRestaurantCard();

  


  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      <div className="searchBarContainer flex flex-row justify-center items-center">
        <input
          type="text"
          className="searchBar border-2 p-3 px-6 mt-3 rounded-full flex justify-between w-1/2"
          placeholder="What do you want to eat?"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const searchFilter = restList.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestList(searchFilter);
            }
          }}
        />
        <button
          className="px-3 py-1.3 bg-amber-300/80 hover:bg-amber-500 cursor-pointer border rounded-3xl"
          onClick={() => {
            const searchFilter = restList.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestList(searchFilter);
          }}
        >
          Search
        </button>
      </div>

      <div className="textContainer flex justify-around items-center pt-4">
        <h2 className="text font-bold text-lg">{heading}</h2>

        <button
          className={`px-2 py-2 border rounded-4xl flex items-center gap-2
    ${
      topRatedActive
        ? "bg-amber-500 text-white"
        : "bg-amber-300/80 hover:bg-amber-500"
    }
  `}
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
          Top Rated Restaurants
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
              <RestaurantCards restData={restaurant} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
