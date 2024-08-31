import { data } from "./Diseases/Data/Data"
import './Styles/Crops.css'
import { useState } from 'react'
const Seeds = () => {
    const [crop, setCrop] = useState(data)
  return (
    <div>
        <h1>Fields Crops</h1>
       <div className='list-container'>
        
        {crop.map((crop,index) =>(
           <div key ={index} className='custom-card'>
            <img src={crop.image} alt={crop.name} className='image' />
           
           </div>
           
        ))}
     </div>
     <h1>vegetables</h1>
     <div className='list-container'>
        
        {crop.map((crop,index) =>(
           <div key ={index} className='custom-card'>
            <img src={crop.image} alt={crop.name} className='image' />
           
           </div>
           
           
        ))}
     </div>
     <h1>Fruits</h1>
     <div className='list-container'>
       
        {crop.map((crop,index) =>(
           <div key ={index} className='custom-card'>
            <img src={crop.image} alt={crop.name} className='image' />
           
           </div>
           
        ))}
     </div>
    </div>
  )
}

export default Seeds
