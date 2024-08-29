import { NavLink } from "react-router-dom";
import './Styles/Navbar.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import { FaDisease } from "react-icons/fa";
import { MdOutlineForum} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../assets/agro-logo.png"
import './Weatherdetail/Weather'
import './DiseaseRecognition'
import './Seeds'
import './Forum'
const Navbar = () =>{
   const [navs, setNavs] = useState(false);

return (
     <nav className="navbar">
      <div className="logo">
      <img className='img-logo' src={logo} alt="crop" />
      </div>
       <div className={ navs ?" list-item  mobile-list-item":"list-item"}>
         <ul>
        
             <li>
             <TiWeatherPartlySunny
             className='weather' />
                <NavLink to="/weather" onClick={() => setNavs(false)}>Weather</NavLink>
                </li> 
                
             <li>
             <PiCoffeeBeanDuotone 
             className='seeds'/>
                 <NavLink to="/seeds" onClick={() => setNavs(false)}>Seeds</NavLink>
                </li>
        
            <li>
            <FaDisease 
             className='disease'/>
              <NavLink to="/disease-recognition" onClick={() => setNavs(false)}>Disease</NavLink>
               
                </li>
            
        <li>
        <MdOutlineForum 
        className='form'/>
           <NavLink to="/forum" onClick={() => setNavs(false)}>Forum</NavLink>
            </li>
          
         </ul>
           <div onClick={() => setNavs(!navs)} className="menu">
           <a href="#">
           <AiOutlineMenu size={25} />
           </a>
          </div>
      </div>
         
          
     </nav>
   
);
} 
export default Navbar;
