import { NavLink } from "react-router-dom";
import './Styles/Navbar.css';
import { IoMdHome } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiGrainBundle } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";
import { MdOutlineForum} from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../assets/agro-logo.png"
import './Weatherdetail/Weather'
import './DiseaseRecognition'
import './Seeds'
import './EChaupal'
import Login from './Login'
const Navbar = () =>{
   const [navs, setNavs] = useState(false);
   const [isActive, setIsActive] = useState(false);

   // Function to toggle the login form's visibility
   const toggleLoginForm = () => {
     setIsActive(!isActive);
   };
 
   
   const closeLoginForm = () => {
     setIsActive(false);
   };
return (
  <>
     <nav className="navbar">
      <div className="logo">
      <img className='img-logo' src={logo} alt="crop" />
      </div>
       <div className={ navs ?" list-item  mobile-list-item":"list-item"}>
         <ul>
            <li>
            <IoMdHome className="home" />
            <NavLink to="/home" onClick={() => setNavs(false)}>Home</NavLink>
            </li>
             <li>
             <TiWeatherPartlySunny onClick={() => setNavs(false)}
             className='weather' />
                <NavLink to="/weather" onClick={() => setNavs(false)}>Weather</NavLink>
                </li> 
                
             <li>
             <GiGrainBundle 
             className='seeds'/>
                 <NavLink to="/seeds" onClick={() => setNavs(false)}>Crop Advice</NavLink>
                </li>
        
            <li>
            <FaDisease 
             className='disease'/>
              <NavLink to="/disease-recognition" onClick={() => setNavs(false)}>Ask AgroLoop</NavLink>
               
                </li>
                <li>
                <BsGraphUpArrow 
             className='market-update'/>
              <NavLink to="/MarketUpdate" onClick={() => setNavs(false)}>Market Update</NavLink>
               
                </li>
            
        <li>
        <MdOutlineForum 
        className='form'/>
           <NavLink to="/EChaupal" onClick={() => setNavs(false)}>E-Chaupal</NavLink>
            </li>
            <li>
              <FaUserAlt className="login" size={35} onClick={toggleLoginForm} />
            </li>
           
         </ul>
           <div onClick={() => setNavs(!navs)} className="menu">
           <a href="#">
           <AiOutlineMenu size={25} />
           </a>
          </div>
      </div>
      <Login isActive={isActive} closeLoginForm={closeLoginForm} />
     </nav>

     </>
);
} 
export default Navbar;
