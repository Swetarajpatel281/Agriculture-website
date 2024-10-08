import { useEffect, useState } from 'react';
import { useStateContext } from '../../Components/Weatherdetail/Context';
import "./Weathercss/BackgroundLaout.css"

// Import images
import Clear from '../../assets/images/clear.jpg';
import Fog from '../../assets/images/fog.png';
import Cloudy from '../../assets/images/Cloudy.jpg';
import Rainy from '../../assets/images/Rainy.jpg';
import Snow from '../../assets/images/snow.jpg';
import Stormy from '../../assets/images/Stormy.jpg';
// import Sunny from '../../assets/images/Sunny.jpg';

 const BackgroundLayout = () => {
  const { weather } = useStateContext();
  console.log(weather);
  
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      const imageString = weather.conditions.toLowerCase();
      if (imageString.includes('clear')) {
        setImage(Clear);
      } else if (imageString.includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        setImage(Rainy);
      } else if (imageString.includes('snow')) {
        setImage(Snow);
      } else if (imageString.includes('fog')) {
        setImage(Fog);
      } else if (imageString.includes('thunder') || imageString.includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <div className="background-container">
      <img src={image} alt="weather background" className="background-image" />
    </div>
  );
};

export default BackgroundLayout;
