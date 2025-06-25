import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (restid) => {

    const [restInfo , setRestInfo] = useState(null)
  
    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + restid + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
