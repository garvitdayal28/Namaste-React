const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./src/assets/logo.png" height={100} width={100} alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li className="hover:scale-105 hover:border-b-amber-400 hover:border-b-1 hover:cursor-pointer transition-all ">Home</li>
          <li className="hover:scale-105 hover:border-b-amber-400 hover:border-b-1 hover:cursor-pointer transition-all ">About</li>
          <li className="hover:scale-105 hover:border-b-amber-400 hover:border-b-1 hover:cursor-pointer transition-all ">Contact us</li>
          <li className="hover:scale-105 hover:border-b-amber-400 hover:border-b-1 hover:cursor-pointer transition-all ">Cart</li>
        </ul>
        </div>
    </div>
  );
};


export default Header;
