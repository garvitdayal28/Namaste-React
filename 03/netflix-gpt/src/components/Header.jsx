import React from "react";
import Dropdown from "./dropdown/Dropdown";
import { Link, Links } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute flex items-center bg-gradient-to-b from-35% from-black w-full justify-around z-10">
      <img
      className="w-44 mt-4"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

    <div className="flex items-center gap-4 mt-4">

      <Dropdown/>

      <button className="text-white bg-[#E50914] py-1 px-3 rounded-md font-bold"
      // onClick={<Link to={/login>}/>}
      >
        Sign in</button>
    </div>
      
    </div>
  );
};

export default Header;
