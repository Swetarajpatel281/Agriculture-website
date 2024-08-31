// MarketUpdate.jsx
import React, { useState, useEffect } from 'react';
import './Styles/MarketUpdate.css';

// Expanded mock data for 20 states, their districts, markets, and popular crops
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
  TamilNadu: {
    districts: {
      Chennai: ['Koyambedu Market', 'Madhavaram Market'],
      Coimbatore: ['Coimbatore Market', 'Gandhipuram Market'],
    },
    crops: ['Coconut', 'Banana', 'Turmeric'],
  },
  Gujarat: {
    districts: {
      Ahmedabad: ['Ahmedabad Market', 'Maninagar Market'],
      Surat: ['Surat Market', 'Udhana Market'],
    },
    crops: ['Cotton', 'Groundnut', 'Sugarcane'],
  },
  Rajasthan: {
    districts: {
      Jaipur: ['Jaipur Market', 'Johari Bazar'],
      Udaipur: ['Udaipur Market', 'Hathi Pol Market'],
    },
    crops: ['Wheat', 'Barley', 'Maize'],
  },
  Bihar: {
    districts: {
      Patna: ['Patna Market', 'Gandhi Maidan Market'],
      Gaya: ['Gaya Market', 'Bodhgaya Market'],
    },
    crops: ['Maize', 'Rice', 'Wheat'],
  },
  Haryana: {
    districts: {
      Gurgaon: ['Gurgaon Market', 'Sadar Bazar'],
      Faridabad: ['Faridabad Market', 'Ballabgarh Market'],
    },
    crops: ['Wheat', 'Rice', 'Sugarcane'],
  },
  Odisha: {
    districts: {
      Bhubaneswar: ['Bhubaneswar Market', 'Unit 1 Market'],
      Cuttack: ['Cuttack Market', 'Choudhary Bazar'],
    },
    crops: ['Rice', 'Pulses', 'Groundnut'],
  },
  AndhraPradesh: {
    districts: {
      Visakhapatnam: ['Visakhapatnam Market', 'MVP Market'],
      Vijayawada: ['Vijayawada Market', 'Besant Road Market'],
    },
    crops: ['Rice', 'Chili', 'Cotton'],
  },
  Kerala: {
    districts: {
      Kochi: ['Ernakulam Market', 'Broadway Market'],
      Thiruvananthapuram: ['Palayam Market', 'Chalai Market'],
    },
    crops: ['Rubber', 'Coconut', 'Pepper'],
  },
  MadhyaPradesh: {
    districts: {
      Indore: ['Indore Market', 'Sarafa Bazar'],
      Bhopal: ['Bhopal Market', 'New Market'],
    },
    crops: ['Wheat', 'Soybean', 'Rice'],
  },
  Telangana: {
    districts: {
      Hyderabad: ['Secunderabad Market', 'Gaddiannaram Market'],
      Warangal: ['Warangal Market', 'Hanamkonda Market'],
    },
    crops: ['Cotton', 'Maize', 'Rice'],
  },
  Assam: {
    districts: {
      Guwahati: ['Fancy Bazar Market', 'Paltan Bazar'],
      Dibrugarh: ['Dibrugarh Market', 'New Market'],
    },
    crops: ['Tea', 'Rice', 'Mustard'],
  },
  HimachalPradesh: {
    districts: {
      Shimla: ['Lakkar Bazar Market', 'Lower Bazar'],
      Mandi: ['Mandi Market', 'Sundernagar Market'],
    },
    crops: ['Apple', 'Potato', 'Barley'],
  },
  Jharkhand: {
    districts: {
      Ranchi: ['Ranchi Market', 'Daily Market'],
      Dhanbad: ['Dhanbad Market', 'Bank More Market'],
    },
    crops: ['Rice', 'Wheat', 'Maize'],
  },
  Chhattisgarh: {
    districts: {
      Raipur: ['Raipur Market', 'Shastri Bazar'],
      Bilaspur: ['Bilaspur Market', 'Old Bus Stand Market'],
    },
    crops: ['Paddy', 'Wheat', 'Maize'],
  },
  Uttarakhand: {
    districts: {
      Dehradun: ['Paltan Bazar Market', 'Clock Tower Market'],
      Nainital: ['Mall Road Market', 'Bhotia Market'],
    },
    crops: ['Rice', 'Wheat', 'Barley'],
  }
};

const MarketUpdate = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [marketData, setMarketData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData && selectedState && selectedDistrict && selectedMarket && selectedCrop) {
      const fetchMarketData = async () => {
        try {
          const response = await fetch(
            `API_ENDPOINT?state=${selectedState}&district=${selectedDistrict}&market=${selectedMarket}&crop=${selectedCrop}`
          );
          const data = await response.json();
          setMarketData(data);
        } catch (error) {
          console.error('Error fetching market data:', error);
        } finally {
          setFetchData(false);
        }
      };

      fetchMarketData();
    }
  }, [fetchData, selectedState, selectedDistrict, selectedMarket, selectedCrop]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
    setSelectedMarket('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedMarket('');
  };

  const handleApplyClick = () => {
    setFetchData(true);
  };

  return (
    <div className="market-update-container">
      <h2>Market Update</h2>
      <div>
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

        {/* Apply Button to fetch data */}
        <button onClick={handleApplyClick} style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#2d6a4f', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Apply
        </button>
      </div>

      {/* Display market data in a table */}
      {marketData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Market Name</th>
              <th>Crop</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((market, index) => (
              <tr key={index}>
                <td>{market.marketName}</td>
                <td>{market.crop}</td>
                <td>{market.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        fetchData && <p>No data available. Please adjust your filters and try again.</p>
      )}
    </div>
  );
};

export default MarketUpdate;
