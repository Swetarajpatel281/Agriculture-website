// import React from 'react'
import { useState,useEffect } from 'react';
import './Styles/Spinner.css'
const Spinner = ({src,alt}) => {
    const [isActive, setIsActive] = useState(true);

    // Automatically deactivate the loader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 4000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return(
    <div className={`spinner-container ${isActive ? 'active' : ''}`}>
         <img src={src} alt={alt} />
    </div>
  )
}

export default Spinner
