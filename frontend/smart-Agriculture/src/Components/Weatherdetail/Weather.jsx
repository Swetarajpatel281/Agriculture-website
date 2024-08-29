
import { useState } from 'react';
import "./Weathercss/Weather.css"
import search from '../../assets/search.svg'
import { useStateContext } from './Context';
import BackgroundLayout from './BackgroundLayout.jsx';

import  MiniCard from './MiniCard.jsx';
import  WeatherCard  from './WeatherCard.jsx';

function Weather() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, setPlace } = useStateContext();
  console.log(weather);
  
  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  return (
    <div className="app-container">
      <nav className="nav">
        <h1 className="title">Weather App</h1>
        <div className="search-bar">
          <img src={search} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search city"
            className="search-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
          />
        </div>
      </nav>

      <BackgroundLayout/>

      <main className="main-content">
        <WeatherCard
          place={thisLocation}
          windspeed={weather?.wspd}
          humidity={weather?.humidity}
          temperature={weather?.temp}
          heatIndex={weather?.heatindex}
          iconString={weather?.conditions}
          conditions={weather?.conditions}
        />

        <div className="mini-cards-container">
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Weather;
