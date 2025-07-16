import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useStore } from "../utils/store";

const Header = () => {
  const [login, setlogstate] = useState("Login");
  const cartLength = useStore((state) => state.cart.length);

  return (
    <div className="header flex sticky top-0 flex-wrap items-center justify-between bg-red-400 z-100 px-6 py-3 rounded-b-2xl shadow-xl">
      {/* Logo */}
      <div className="logo flex items-center gap-3">
        <img
          className="rounded-full border-2 border-white shadow-lg"
          src={logo}
          height={60}
          width={60}
          alt=""
        />
        <span className="text-2xl font-bold text-white tracking-tight">
          Foodie
        </span>
      </div>

      {/* Nav + Button */}
      <div className="flex flex-wrap justify-end items-center gap-6 mt-2 sm:mt-0">
        <ul className="flex flex-wrap gap-8 items-center text-white font-bold">
          <li className="hover:text-red-100 hover:scale-105 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-100 hover:scale-105 transition-all">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:text-red-100 hover:scale-105 transition-all">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="hover:scale-105 transition-all">
            <Link
              to="/Cart"
              className="bg-white text-red-500 px-4 py-2 rounded-full shadow-md font-bold"
            >
              Cart ({cartLength})
            </Link>
          </li>
        </ul>

        <button
          className="bg-white text-red-500 hover:bg-red-600 hover:text-white transition-all border-2 border-white rounded-full px-5 py-2 text-sm font-bold shadow-md"
          onClick={() =>
            login === "Login" ? setlogstate("Logout") : setlogstate("Login")
          }
        >
          {login}
        </button>
      </div>
    </div>
  );
};

export default Header;
