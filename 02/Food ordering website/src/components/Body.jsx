import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [heading, setHeading] = useState(
    "Restaurants with online food delivery in Jabalpur"
  );
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1462697&lng=79.9311628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
          className="px-2 py-2 bg-amber-300/80 hover:bg-amber-500 cursor-pointer border rounded-4xl"
          onClick={() => {
            setHeading("Top Rated Restaurants");
            const filterList = restList.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setRestList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="cardsContainer flex flex-wrap pt-7 justify-center">
        {filteredRestList.map((restaurant) =>
          restaurant?.info ? (
            <RestaurantCards key={restaurant.info.id} restData={restaurant} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
