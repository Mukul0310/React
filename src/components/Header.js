import { LOGO_URL } from "../Utils/config"; 


export const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" alt="logo" src= {LOGO_URL} />
            </div>

            <div className="header-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;