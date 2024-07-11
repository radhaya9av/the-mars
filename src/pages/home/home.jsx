import React, { useState, useEffect } from 'react';
import { formatDate } from '../../helpers';

import Info from "../../components/Info"
import Unit from "../../components/Unit"
import WeatherData from "../../components/WeatherData"
import "../../styles/Home.scss"

function Home() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectedSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  console.log(weather);

  const apiKey = import.meta.env.VITE_MARS_API_KEY;
  const apiUrl = import.meta.env.VITE_MARS_API_URL;

  useEffect(() => {
    const fetchFromAPI = async () => {
      const weather = await (await fetch(apiUrl)).json();
      const marsWeather = weather.sol_keys.map((solKey) => {
        return {
          sol: solKey,
          maxTemp: weather[solKey].AT?.mx || 'No data',
          minTemp: weather[solKey].AT?.mn || 'No data',
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          windDirectionDegrees:
            weather[solKey].WD?.most_common?.compass_degrees || 0,
          date: formatDate(new Date(weather[solKey].First_UTC)),
        };
      });
      setWeather(marsWeather);
      setSelectedSol(marsWeather.length - 1);
      setLoading(false);
    };

    fetchFromAPI();
  }, []);

  return (
    <>
      <div className = "MarsWeather">
        <div>
          <h1 className='main-title'>
              Latest weather at Elysium Plantitia
          </h1>
        </div>
        <div>
          <WeatherData />
        </div>
        <div className = "InfoWrapper">
          <Info />
          <Unit />
        </div>
      </div>
    </>
  )
}

export default Home