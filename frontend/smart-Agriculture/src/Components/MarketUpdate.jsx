// MarketUpdate.jsx
import React, { useState, useEffect } from 'react';
import './Styles/MarketUpdate.css';

// Mock data for states, districts, markets, and crops
const stateData = {
  Maharashtra: {
    districts: {
      Pune: ['Pune Market', 'Shivaji Market'],
      Nashik: ['Nashik Market', 'Deolali Market'],
    },
    crops: ['Grapes', 'Onion', 'Sugarcane'],
  },
  Punjab: {
    districts: {
      Ludhiana: ['Ludhiana Market', 'Gill Road Market'],
      Amritsar: ['Amritsar Market', 'Khalsa Market'],
    },
    crops: ['Wheat', 'Rice', 'Maize'],
  },
  UttarPradesh: {
    districts: {
      Varanasi: ['Varanasi Market', 'Lanka Market'],
      Agra: ['Agra Market', 'Sadar Bazar Market'],
    },
    crops: ['Potato', 'Tomato', 'Sugarcane'],
  },
  Karnataka: {
    districts: {
      Bengaluru: ['KR Market', 'Yeshwanthpur Market'],
      Mysore: ['Mysore Market', 'Devaraja Market'],
    },
    crops: ['Ragi', 'Coffee', 'Banana'],
  },
  WestBengal: {
    districts: {
      Kolkata: ['Sealdah Market', 'New Market'],
      Darjeeling: ['Darjeeling Market', 'Kalimpong Market'],
    },
    crops: ['Tea', 'Jute', 'Rice'],
  },
};

const MarketUpdate = () => {
  // State to store filters and data
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [marketData, setMarketData] = useState([]);

  // Fetch market data when filters change
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedMarket && selectedCrop) {
      const fetchMarketData = async () => {
        try {
          // Simulate fetching data from API endpoint
          const response = await fetch(
            `API_ENDPOINT?state=${selectedState}&district=${selectedDistrict}&market=${selectedMarket}&crop=${selectedCrop}`
          );
          const data = await response.json();
          setMarketData(data);
        } catch (error) {
          console.error('Error fetching market data:', error);
        }
      };

      fetchMarketData();
    }
  }, [selectedState, selectedDistrict, selectedMarket, selectedCrop]);

  // Handle State change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
    setSelectedMarket('');
  };

  // Handle District change
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedMarket('');
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #dff4d2, #b0d6a0)', padding: '20px' }}>
      <h2>Market Update</h2>
      <div>
        {/* Filters for State, District, Mandi/Market, and Crop */}
        <select onChange={handleStateChange} value={selectedState}>
          <option value="">Select State</option>
          {Object.keys(stateData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {selectedState && (
          <select onChange={handleDistrictChange} value={selectedDistrict}>
            <option value="">Select District</option>
            {Object.keys(stateData[selectedState].districts).map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        )}

        {selectedDistrict && (
          <select onChange={(e) => setSelectedMarket(e.target.value)} value={selectedMarket}>
            <option value="">Select Mandi/Market</option>
            {stateData[selectedState].districts[selectedDistrict].map((market) => (
              <option key={market} value={market}>
                {market}
              </option>
            ))}
          </select>
        )}

        {selectedDistrict && (
          <select onChange={(e) => setSelectedCrop(e.target.value)} value={selectedCrop}>
            <option value="">Select Crop/Fruit/Vegetable</option>
            {stateData[selectedState].crops.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Display Market Data */}
      <div>
        {marketData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Crop</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((item, index) => (
                <tr key={index}>
                  <td>{item.cropName}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MarketUpdate;
