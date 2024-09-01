import { useState } from 'react'
import { data } from "./Diseases/Data/Data"
import './Styles/Crops.css'

// Extract unique values for crops and diseases
const uniqueCrops = [...new Set(data.map(item => item.crops))]
const uniqueDiseases = [...new Set(data.map(item => item.diseases))]

const Seeds = () => {
   const [filterType, setFilterType] = useState('all') // State to manage filter type
   const [selectedFilter, setSelectedFilter] = useState('all') // State to manage selected filter value

   // Function to handle filter type selection
   const handleFilterTypeChange = (event) => {
      setFilterType(event.target.value)   
      setSelectedFilter('all') // Reset selectedFilter when filter type changes
   }

   // Function to handle filter value selection
   const handleFilterChange = (event) => {
      setSelectedFilter(event.target.value)
   }

   // Filter data based on selected filter type and value
   const filteredCrops = selectedFilter === 'all' 
      ? data 
      : filterType === 'crops'
         ? data.filter(crop => crop.crops === selectedFilter)
         : data.filter(crop => crop.diseases === selectedFilter)

   return (
      <div>
         <h1>Crop Selection</h1>
         
         {/* Dropdown to select filter type */}
         <select onChange={handleFilterTypeChange} value={filterType}>
            <option value="all">Show All</option>
            <option value="crops">Filter by Crops</option>
            <option value="diseases">Filter by Diseases</option>
         </select>

         {/* Dropdown to select specific filter value */}
         {filterType !== 'all' && (
            <select onChange={handleFilterChange} value={selectedFilter}>
               <option value="all">All</option>
               {filterType === 'crops' && uniqueCrops.map((crop, index) => (
                  <option key={index} value={crop}>{crop}</option>
               ))}
               {filterType === 'diseases' && uniqueDiseases.map((disease, index) => (
                  <option key={index} value={disease}>{disease}</option>
               ))}
            </select>
         )}

         <div className='list-container'>
            {filteredCrops.length > 0 ? (
               filteredCrops.map((crop, index) => (
                  <div key={index} className='custom-card'>
                     <a href={`http://localhost:8000/crop/${encodeURIComponent(crop.crops)}`} rel='noopener noreferrer'>
                        <img src={crop.image} alt={crop.crops} className='image' />
                     </a>
                  </div>
               ))
            ) : (
               <p>No crops found for the selected filter.</p>
            )}
         </div>
      </div>
   )
}

export default Seeds
