import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restData?.info || {};
  return (
    <div
      className="cards border-2 border-gray-300 rounded-2xl w-70 bg-gray-300 ml-7 mr-7 mt-5
    m-3 hover:scale-105 hover:border-2 hover:border-gray-300 hover:cursor-pointer transition-all hover:shadow-[0_0_15px_#212121] 
    "
    >
      <div className="image">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="h-70 w-70 rounded-2xl"
        />
      </div>
      <div className="details p-3">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="specialFood">
          <h2>{cuisines.join(", ")}</h2>
        </div>
        <div className="rating">
          <h3>{avgRating} / 5.0</h3>
        </div>
        <div className="deliveryTime">
          <h3>{sla?.slaString + "Delivery Time"}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
