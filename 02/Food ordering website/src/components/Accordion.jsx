import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import AccordionData from "./AccordionData";

const Accordion = ({ regularCards }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const itemCategory = regularCards.filter(
    (e) =>
      e.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleCategory = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {itemCategory?.map((item, catIndex) => (
        <div
          key={catIndex}
          className="category w-full max-w-4xl flex flex-col justify-center items-center mb-6"
        >
          <div
            className={`category-title w-full flex justify-between items-center text-2xl font-bold border border-slate-300 shadow-md p-4 rounded-2xl cursor-pointer bg-slate-50 hover:bg-emerald-50 transition-all ${
              expandedIndex === catIndex ? "ring-2 ring-emerald-300" : ""
            }`}
            onClick={() => toggleCategory(catIndex)}
          >
            <span className="ml-1 text-emerald-700">
              {item.card.card.title}
            </span>
            <span className="mr-1 mt-1">
              <FaChevronDown
                className={
                  expandedIndex === catIndex
                    ? "rotate-180 transition-transform text-emerald-600"
                    : "transition-transform text-emerald-600"
                }
              />
            </span>
          </div>

          {expandedIndex === catIndex && (
            <AccordionData itemCategory={[item]} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
