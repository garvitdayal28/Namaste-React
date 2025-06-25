import { useState, useEffect } from "react";


const useRestaurantCard = () => {

    const [restList, setRestList] = useState([]);
      const [filteredRestList, setFilteredRestList] = useState([]);


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

   return { restList, filteredRestList, setFilteredRestList };
}

export default useRestaurantCard;