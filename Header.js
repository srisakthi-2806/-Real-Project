import React from "react";
import logo from "../Assets/logo.jpg";
//import login_logo from "../Assets/login_logo.jpg";

//import { VscAccount } from "react-icons/vsc";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
//import { AiOutlineLogout } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                
                <img  src={logo} height="100px" width="100px" />
               
            </div>
            <nav className="navigation">
               <ul>
                    <AiOutlineHome  className="icons homeicon"/>
                  <li><a href="/">Vehicle Repair</a></li>
                    <li><a href="/">Body Works</a></li>
                    <li><a href="/">Air Filter Cleaning</a></li>
                    <li><a href="/"> Engine Oil Replacement </a></li>
                    <li><a href="/"> Interior Vacuum </a></li>
                </ul>
            </nav>

            <div >
            </div>
<IoLogoWhatsapp className="icons whatsapp" />
<FaTwitter className="icons twitter" />

            <div className="btn">
                <button type="button" ><BiUserPlus  className="icons signup"/ >Signup</button>
            </div>
        </div>
    );
}
export default Header;