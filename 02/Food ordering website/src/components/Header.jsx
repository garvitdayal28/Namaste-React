import { useState } from "react";

const Header = () => {

  const [login, setlogstate] = useState("Login");
  return (
    <div className="header flex justify-between bg-red-400/80 rounded-b-2xl">
      <div className="logo rounded-b-2xl">
        <img
          className="ml-3 rounded-full py-2"
          src="./src/assets/logo.png"
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className="mr-5 flex w-4/5 justify-end">
        <ul className="text-black flex justify-between items-center w-2/7 mx-8 font-bold">
          <li className="hover:scale-125 hover:border-b-amber-900 hover:border-b-1 hover:cursor-pointer transition-all ">
            Home
          </li>
          <li className="hover:scale-105 hover:border-b-amber-900 hover:border-b-1 hover:cursor-pointer transition-all ">
            About
          </li>
          <li className="hover:scale-105 hover:border-b-amber-900 hover:border-b-1 hover:cursor-pointer transition-all ">
            Contact us
          </li>
          <li className="hover:scale-105 hover:border-b-amber-900 hover:border-b-1 hover:cursor-pointer transition-all ">
            Cart
          </li>
          <button
            className="hover:scale-105 hover:cursor-pointer transition-all border-2 rounded-2xl px-2 py-1.5 w-1/6"
            onClick={() => {
             login === "Login" ? setlogstate("Logout") : setlogstate("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
