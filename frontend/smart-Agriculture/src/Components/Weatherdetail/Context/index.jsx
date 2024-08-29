

import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [place, setPlace] = useState('Indore');
    const [thisLocation, setLocation] = useState('');

    // fetch api
    const fetchWeather = async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`; // Corrected URL

        try {
            const response = await axios.get(url);
            console.log(response.data);

            const thisData = response.data; // OpenWeather returns data directly in the response

            // Set the location to the city name returned by the API
            setLocation(thisData.name);

            // Setting weather details from the API response
            setWeather({
                temp: thisData.main.temp, // Temperature
                humidity: thisData.main.humidity, // Humidity
                wspd: thisData.wind.speed, // Wind speed
                conditions: thisData.weather[0].main, // Weather condition (e.g., Rain, Clouds)
                heatindex: thisData.main.feels_like // Feels like temperature
            });
        } catch (e) {
            console.error(e);
            // If the API throws an error.
            alert('This place does not exist');
        }
    }

    useEffect(() => {
        if (place) {
            fetchWeather(place); // Ensure that fetchWeather is called with the correct city
        }
    }, [place]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
