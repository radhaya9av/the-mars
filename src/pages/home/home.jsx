import React, { useState, useEffect } from 'react';
import { formatDate } from '../../helpers';


import WeatherData from '../../components/WeatherData';
import Info from '../../components/Info';
import Unit from '../../components/Unit';


import {
  MarsWeather,
  InfoWrapper,
} from '../../styles/Home.styles';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectedSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  console.log(weather);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const weather = await (await fetch(API_URL)).json();
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
      <MarsWeather>
        {loading ? (
          <div>Loading ...</div>
        ) : (
          <>
            <h1 className='main-title'>
              Latest weather at Elysium Plantitia
            </h1>
            <WeatherData sol={weather[selectedSol]} isMetric={metric} />
            <InfoWrapper>
              <Info />
              <Unit metric={metric} setMetric={setMetric} />
            </InfoWrapper>
          </>
        )}
      </MarsWeather>
    </>
  );
};

export default App;