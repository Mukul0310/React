import { LOGO_URL } from "../Utils/config";
import { useState, lazy, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
//import Grocery from "./Grocery";
export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  const onlinestatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to store using selector
  const cart = useSelector((Store) => Store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between  my-1 bg-blue-50 shadow-lg ">
      <div className="">
        <img className="w-40" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4  ">
          <li className="px-4">onlinestatus: {onlinestatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">Cart - {cart.length} items</Link>
          </li>
          <button
            className="button px-4"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
