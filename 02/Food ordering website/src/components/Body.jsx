import RestaurantCards from "./RestaurantCards";
import { restArr } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState(restArr);
  const [heading, setHeading] = useState("Restaurants");
  let filterList = [];
  return (
    <div className="body">
      <div className="searchBar rounded-full h-5 w-full px-10 flex items-center justify-between ">
        <h3>What do you want to eat?</h3>
        <button className="px-3 py-1.3 bg-amber-300/80 hover:bg-amber-500 cursor-pointer border rounded-3xl">
          Search
        </button>
      </div>
      <div className="heading flex items-center">
        <h2 className="text">{heading}</h2>
        <button
          className="px-2 py-2 bg-amber-300/80 hover:bg-amber-500 cursor-pointer border rounded-4xl "
          onClick={() => {
            setHeading("Top Rated Restaurants");
            filterList = restList.filter((rest) => rest.info.avgRating > 4.2);
            setRestList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {restList.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
