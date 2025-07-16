import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import MultiAccordionData from "./MultiAccordionData";

const MultiAccordion = ({ regularCards }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCategory = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const itemCategory = regularCards.filter(
    (e) =>
      e.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  return (
    <div className="mainContainer w-full flex flex-col items-center">
      {itemCategory?.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="w-3/4 flex flex-col items-center justify-center"
        >
          <div className="heading w-3/5 justify-between items-center text-3xl border-gray-200 border-2 shadow-xl m-2 mt-8 p-2 rounded-2xl cursor-pointer font-bold text-gray-900">
            {item.card.card.title}

            {item.card.card.categories.map((subItem, subIndex) => {
              const uniqueIndex = `${itemIndex}-${subIndex}`;
              return (
                <div
                  key={subIndex}
                  className=""
                >
                  <span
                    className="mr-1 mt-1 flex items-center justify-between text-gray-900 font-bold
                    mr-2 ml-2 subHeading category-title fle justify-between items-center text-3xl border-gray-200 border-2 shadow-xl m-2 mt-8 p-2 rounded-2xl cursor-pointer
                    "
                    onClick={() => toggleCategory(uniqueIndex)}
                  >
                    {subItem.title}
                    <FaChevronDown />
                  </span>

                  {expandedIndex === uniqueIndex && (
                    <div>
                      <MultiAccordionData subItem={subItem} />
                    </div>
                  )}
                  </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion;
