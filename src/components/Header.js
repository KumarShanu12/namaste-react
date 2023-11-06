import { useState } from "react";
import { LOGO_URL } from "./utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utilities/useOnlineStatus";
const Header = () => {
  const [btnName , setBtnName] =useState('Login')

  const status = useOnlineStatus()
  console.log(status)
    return (
      <div className="flex justify-between	p-4 shadow-lg bg-pink-50">
        <div className="">
          <img
            className="w-24"
             src={LOGO_URL}
            alt="logo-food"
          />
        </div>
  
        <div className="">
          <ul className="flex justify-between">
          <li className="m-4">Status {status ?  '✅'  : '❎' }</li>
          <li className="m-4"><Link to="/grocery">Grocery</Link></li>
            <li className="m-4"><Link to="/">Home</Link></li>
            <li className="m-4"><Link to="/about">About Us</Link> </li>
            <li className="m-4" ><Link to="/contact">Contact Us</Link></li>
            <li className="m-4">Cart</li>
            <button className="mx-4" onClick={()=>btnName=='Login' ? setBtnName('Logout') : setBtnName('Login')} style={{padding: "1rem"}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header