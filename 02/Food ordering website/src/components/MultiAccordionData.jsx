import { useState } from "react";
import { ACC_URL } from "../utils/constants";
import { FaChevronDown } from "react-icons/fa";

const MultiAccordionData = ({ subItem }) => {
  const [shownDescriptions, setShownDescriptions] = useState({})
  

  return (
    <div className="dishes-list">
      {subItem.itemCards?.map((dish, index) => {
        const isDescriptionShown = shownDescriptions[index];

        return (
          <div
            key={index}
            className="dish justify-center border-b-[1.8px] border-gray-600/40 m-4 p-2"
          >
            <div className="flex items-center justify-between">
              <div className="pr-4">
                <div className=" text-gray-700  mb-2"
                
                >
                  {dish.card.info.name}
                  <div className="mr-1 mt-1">
            </div>
                </div>
                <div className="price ">
                  ₹
                  {dish.card.info.defaultPrice
                    ? dish.card.info.defaultPrice / 100
                    : dish.card.info.price / 100}
                </div>
                <div className="rating pt-2 pb-2 text-green-600">
                  {dish.card.info.ratings.aggregatedRating.rating}
                  {dish.card.info.ratings.aggregatedRating.rating && (
                    <span className="text-gray-500">
                      {" ("}
                      {dish.card.info.ratings.aggregatedRating.ratingCountV2}
                      {")"}
                    </span>
                  )}
                </div>

                <p
                  className={`${
                    isDescriptionShown ? "" : "line-clamp-2"
                  } w-[650px] text-gray-700 font-medium`}
                >
                  {dish.card.info.description}
                  <button
                    onClick={() =>
                      setShownDescriptions((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="ml-2 text-gray-800/80 font-bold hover:underline inline"
                  >
                    {isDescriptionShown ? "Show Less" : "Show More"}
                  </button>
                </p>
              </div>

              <div className="flex-shrink-0 relative mb-12">
                <img
                  className="w-32 h-32 rounded-2xl object-cover"
                  src={ACC_URL + dish.card.info.imageId}
                  alt={dish.card.info.name}
                />

                <button className="p-1.5 pr-5 pl-5 bg-white border border-gray-500 rounded-lg absolute bottom-2 right-2 text-green-600 font-bold text-[18px]">
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultiAccordionData;
