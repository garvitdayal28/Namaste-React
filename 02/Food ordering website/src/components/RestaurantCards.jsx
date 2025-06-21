import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restData?.info || {};
  return (
    <div className="cards">
      <div className="image">
        <img src={CDN_URL + cloudinaryImageId} alt="" width={382} />
      </div>
      <div className="details">
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
