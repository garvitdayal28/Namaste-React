import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useStore } from "./store";

const useRestaurantMenu = (restid) => {
  const { setApiData } = useStore();
  const [restInfo, setRestInfo] = useState(null);

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
  // setApiData(restInfo);
  return restInfo;
};

export default useRestaurantMenu;
