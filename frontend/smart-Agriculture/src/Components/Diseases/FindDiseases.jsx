import './DiseasesCss/FindDiseases.css'
import {data} from './Data/Data.js'
import { useState } from 'react'
const FindDiseases = () => {
    // filter by crops 
    const [crop, setCrop] = useState(data)
    console.log(data);
    const filterCrop =(crops)=>{
        setCrop(
            data.filter((crop) =>{
                return crop.crops === crops;
            })
        );
    }
    const filterpythogen = (diseases) =>{
      setCrop(
        data.filter((crop) =>{
            return crop.diseases === diseases;
        })
      )
    }
  
    
  return (
    <div>
     <nav>
        <span>
        <svg className='left-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
        <p>Diseases</p>
        </span>
     </nav>
     <div>
        <h1>Total Results</h1>
       
        <div>
            {/* filter by pythogen */}
            <div>
                <p>filter type</p>
            </div>
            <div> All</div>
      {/* Filter by crops */}

      <div>
        Filter by crops
        </div>
        </div>
     </div>

     {/* Display diseases  */}
     <div className='list-container'>
        {crop.map((crop,index) =>(
           <div key ={index} className='custom-card'>
            <img src={crop.image} alt={crop.name} className='image' />
            <div className='list-name'>
                <p>{crop.name}</p>
                <p>{crop.diseases}</p>
            </div>
           </div>
        ))}
     </div>
    </div>
  )
}

export default FindDiseases

