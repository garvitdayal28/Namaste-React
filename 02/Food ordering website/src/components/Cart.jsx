import { useParams } from "react-router-dom";
import CartData from "./CartData";
import { useStore } from "../utils/store";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

function Cart() {
  const { restid } = useParams();
  const setClearItem = useStore((state) => state.setClearItem);
  const cartLength = useStore((state) => state.cart.length);

  const handleClearCart = () => {
    setClearItem();
  };

  return (
    <div className="MainContainer flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
      <div className="cartInfo w-full max-w-3xl bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-3xl text-primary-500" />
            <h1 className="text-3xl font-extrabold text-primary-500 tracking-tight">
              Your Cart
            </h1>
            <span className="bg-primary-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartLength}
            </span>
          </div>

          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-5 rounded-full transition-all shadow-md flex items-center gap-2"
            onClick={handleClearCart}
          >
            <FaTrashAlt className="text-sm" />
            <span>Clear Cart</span>
          </button>
        </div>

        <div className="w-full bg-white">
          <CartData restid={restid} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
