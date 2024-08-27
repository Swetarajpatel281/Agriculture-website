// import { NavLink } from "react-router-dom";
import './Styles/Navbar.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import { FaDisease } from "react-icons/fa";
import { MdOutlineForum} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () =>{
   const [navs, setNavs] = useState(false);

return (
     <nav className="navbar">
      <div className="logo">
      <h1>Crop</h1>
      </div>
       <div className={ navs ?" list-item  mobile-list-item":"list-item"}>
         <ul>
        
             <li>
             <TiWeatherPartlySunny
             className='weather' />
                <a href="#weather">Weather</a></li>
            
             <li>
             <PiCoffeeBeanDuotone 
             className='seeds'/>
                <a href="#seeds">Seeds</a></li>
        
            <li>
            <FaDisease 
             className='disease'/>
                <a href="#disease-recognition">Disease</a></li>
            
        <li>
        <MdOutlineForum 
        className='form'/>
            <a href="#forum">Forum</a></li>
          
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
