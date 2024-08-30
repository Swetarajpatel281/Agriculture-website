import { useEffect, useState } from 'react';
import '../../../src/index.css';
import PropTypes from 'prop-types';
import {useDate}  from './useDate';
import sun from '../../assets/icons/sun.png'
import cloud from '../../assets/icons/cloud.png';
import fog from '../../assets/icons/fog.png';
import rain from '../../assets/icons/rain.png';
import snow from '../../assets/icons/snow.png';
import storm from '../../assets/icons/storm.png';
import wind from '../../assets/icons/windy.png';
import "./Weathercss/WeatherCard.css"

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      const lowerCaseIconString = iconString;
      if (lowerCaseIconString.includes('cloud')) {
        setIcon(cloud);
      } else if (lowerCaseIconString.includes('rain')) {
        setIcon(rain);
      } else if (lowerCaseIconString.includes('clear')) {
        setIcon(sun);
      } else if (lowerCaseIconString.includes('thunder')) {
        setIcon(storm);
      } else if (lowerCaseIconString.includes('fog')) {
        setIcon(fog);
      } else if (lowerCaseIconString.includes('snow')) {
        setIcon(snow);
      } else if (lowerCaseIconString.includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className='weather-card'>
      <div className='weather-card-header'>
        <img src={icon} alt="weather icon" className='weather-icon' />
        <p className='temperature'>{temperature} &deg;C</p>
      </div>
      <div className='place'>{place}</div>
      <div className='date-time'>
        <p className='date'>{new Date().toDateString()}</p>
        <p className='time'>{time}</p>
      </div>
      <div className='details'>
        <p className='detail-item windspeed'>
          Wind Speed
          <span>{windspeed} km/h</span>
        </p>
        <p className='detail-item humidity'>
          Humidity
          <span>{humidity} gm/m&#179;</span>
        </p>
      </div>
      <div className='heat-index'>
        <p className='heat-index-label'>Heat Index</p>
        <p className='heat-index-value'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='divider' />
      <div className='conditions'>
        {conditions}
      </div>
    </div>
  );
};
// Define PropTypes
WeatherCard.propTypes = {
    temperature: PropTypes.number.isRequired,
    windspeed: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
    heatIndex: PropTypes.number,
    iconString: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
  };

export default WeatherCard;
