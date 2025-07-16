import { useEffect, useState } from "react";
import { MENU_API, CDN_URL } from "../utils/constants";
import { useStore } from "../utils/store";

const CartData = ({ restid }) => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const cart = useStore((state) => state.cart);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetch(
          MENU_API + restid + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setMenuData(json.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [restid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!menuData) {
    return <div>No menu data available</div>;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    menuData?.cards[0]?.card?.card?.info || {};

  // Flatten all menu items for easy lookup
  const menuItems = [];
  const regularCards =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  regularCards?.forEach((item) => {
    const itemCards = item?.card?.card?.itemCards;
    if (itemCards) {
      itemCards.forEach((dish) => {
        menuItems.push(dish.card.info);
      });
    }
  });

  // Only show items that are in the cart
  const cartDishes = menuItems.filter((dish) => cart.includes(dish.id));

  return (
    <div className="menu-container">
      <div className="restaurant-info mb-6 bg-white rounded-2xl p-6 border border-slate-200">
        <h1 className="text-2xl font-bold text-primary-500 mb-2">{name}</h1>
        <p className="text-slate-600 mb-1">{cuisines?.join(", ")}</p>
        <p className="text-slate-500 mb-1">{costForTwoMessage}</p>
        <div className="flex items-center mt-2">
          <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-sm font-bold">
            {avgRating} ★
          </span>
        </div>
      </div>
      <div className="menu-items space-y-4">
        {cartDishes.length === 0 ? (
          <div className="text-center p-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xl text-slate-400">Your cart is empty</p>
            <p className="text-sm mt-2 text-slate-400">
              Add some delicious items to your cart
            </p>
          </div>
        ) : (
          cartDishes.map((dish) => (
            <div
              key={dish.id}
              className="menu-item flex items-center justify-between border border-slate-200 p-4 bg-white rounded-xl hover:shadow-md transition-all"
            >
              <div className="item-details flex-1 pr-6">
                <h3 className="font-bold text-lg text-slate-800">{dish.name}</h3>
                <p className="text-primary-500 font-bold mt-1">
                  ₹{dish.price / 100 || dish.defaultPrice / 100}
                </p>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                  {dish.description}
                </p>
              </div>
              {dish.imageId && (
                <div className="item-image flex-shrink-0">
                  <img
                    src={CDN_URL + dish.imageId}
                    alt={dish.name}
                    className="w-24 h-24 object-cover rounded-xl border border-slate-200"
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartData;
