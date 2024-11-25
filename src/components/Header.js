import { LOGO_URL } from "../Utils/config";
import { useState,lazy } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
//import Grocery from "./Grocery";
export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  const onlinestatus = useOnlineStatus();
  
  

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>

      <div className="header-items">
        <ul>
          <li>onlinestatus: {onlinestatus ? '🟢' : '🔴'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="button"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
