import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { restid } = useParams();

  const restInfo = useRestaurantMenu(restid);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restInfo?.cards[2]?.card?.card?.info || {};

  const mainCategories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="mainContainer">
      <div className="info">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="rating flex gap-2 mt-2">
          <span>
            {avgRating} ({totalRatingsString})
          </span>
          <span>• {costForTwoMessage}</span>
        </div>
        <div className="cuisines">{cuisines?.join(", ")}</div>
        <div className="outlet">{areaName}</div>
        <div className="deliveryTime">{sla?.slaString}</div>
      </div>

      <div className="menu mt-6">
        {mainCategories.map((category, index) => {
          if (!category?.card?.card?.title) return null;

          if (category.card.card.categories) {
            const categoryTitle = category.card.card.title;
            const subCategories = category.card.card.categories;

            return (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-bold mb-2">{categoryTitle}</h2>

                {subCategories.map((subCat, subIndex) => (
                  <div key={subIndex} className="mb-2 ml-2">
                    <h3 className="font-semibold">{subCat.title}</h3>
                    <ul>
                      {subCat.itemCards?.map((itemCard, itemIndex) => {
                        const item = itemCard?.card?.info;
                        return (
                          <div key={itemIndex} className="ml-4 text-sm">
                            <li>{item?.name}</li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            );
          } else if (category.card.card.carousel) {
            const title = category.card.card.title;
            const carousel = category.card.card.carousel;

            return (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <ul>
                  {carousel.map((item, i) => {
                    const dish = item?.dish?.info;
                    return (
                      <li key={i} className="ml-4 text-sm mb-2">
                        <div className="font-semibold">
                          {dish?.name || item?.title}
                        </div>
                        {dish?.description && <div>{dish.description}</div>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }

          return null; // fallback for unknown formats
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
