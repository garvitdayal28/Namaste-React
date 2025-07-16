import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCards = (props) => {
  const { restData, showStar } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restData?.info || {};

  return (
    <div
      className="cards border-2 border-gray-200 rounded-2xl w-70 h-120 bg-white ml-7 mr-7 mt-5 
      m-3 hover:scale-105 hover:border-red-400 hover:cursor-pointer transition-all hover:shadow-lg shadow-md"
    >
      <div className="image relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="h-70 w-70 rounded-t-2xl object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-12 rounded-b-2xl opacity-70"></div>
      </div>
      <div className="details p-4">
        <div className="name font-bold text-lg flex items-center gap-1 text-gray-800">
          {showStar && <MdStars className="text-red-500" />}
          <h2>{name}</h2>
        </div>
        <div className="specialFood mt-1">
          <h2 className="text-gray-500 text-sm line-clamp-1">
            {cuisines?.join(", ")}
          </h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="rating">
            <h3 className="text-red-500 font-bold flex items-center">
              {avgRating}{" "}
              <span className="text-xs text-gray-500 ml-1">/ 5.0</span>
            </h3>
          </div>
          <div className="deliveryTime">
            <h3 className="text-gray-600 text-sm bg-red-50 px-2 py-1 rounded-full">
              {sla?.slaString}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ HOC passes showStar=true
export const PureVeg = (WrappedComponent) => {
  return (props) => <WrappedComponent {...props} showStar={true} />;
};

export default RestaurantCards;
