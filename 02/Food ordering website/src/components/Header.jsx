import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [login, setlogstate] = useState("Login");

  return (
    <div className="header flex flex-wrap items-center justify-between bg-red-400/80 px-4 py-2 rounded-b-2xl">
      {/* Logo */}
      <div className="logo">
        <img
          className="rounded-full"
          src={logo}
          height={80}
          width={80}
          alt=""
        />
      </div>

      {/* Nav + Button */}
      <div className="flex flex-wrap justify-end items-center gap-6 mt-2 sm:mt-0">
        <ul className="flex flex-wrap gap-6 items-center text-black font-bold">
          <li className="hover:scale-125 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-all">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:scale-105 transition-all">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="hover:scale-105 transition-all">Cart</li>
        </ul>

        <button
          className="hover:scale-105 transition-all border-2 rounded-2xl px-4 py-1 text-sm"
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
