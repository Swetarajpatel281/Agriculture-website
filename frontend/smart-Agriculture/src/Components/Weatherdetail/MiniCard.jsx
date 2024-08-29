import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import sun from '../../assets/icons/sun.png';
import cloud from '../../assets/icons/Cloud.png';
import fog from '../../assets/icons/fog.png';
import rain from '../../assets/icons/rain.png';
import snow from '../../assets/icons/snow.png';
import storm from '../../assets/icons/storm.png';
import wind from '../../assets/icons/windy.png';
import "./Weathercss/MiniCard.css"

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState(sun);

  useEffect(() => {
    if (iconString) {
      const lowerCaseIconString = iconString.toLowerCase();
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
    <div className='mini-card'>
      <p className='day'>{new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}</p>
      <hr className='divider' />
      <div className='icon-container'>
        <img src={icon} alt="forecast icon" className='icon' />
      </div>
      <p className='temperature'>{temp}&deg;C</p>
    </div>
  );
};

// Define PropTypes
MiniCard.propTypes = {
  time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  iconString: PropTypes.string.isRequired,
};

export default MiniCard;
