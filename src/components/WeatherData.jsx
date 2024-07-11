import React from 'react';
import { formatTemperature } from '../helpers';

import "../styles/WeatherData.scss";

const WeatherData = ({ sol, isMetric }) => {
  
    return(
      <>
        <div className = "Wrapper">
            <div className = "Date">
                <h2>{sol.sol}</h2>
                <p>{sol.date}</p>
            </div>

            <div className = "Temp">
                <h2 className='section-title'>Temp</h2>
                <p className='reading'>
                    High:
                    <span> {formatTemperature(sol.maxTemp, isMetric)}</span>°
                    <span> {isMetric ? ' C' : ' F'}</span>
                </p>
                <p className='reading'>
                    Low:
                    <span> {formatTemperature(sol.minTemp, isMetric)}</span>°
                    <span> {isMetric ? ' C' : ' F'}</span>
                </p>
            </div>
            <div
            deg={sol.windDirectionDegrees}
            className = "Wind">
                <h2 className='section-title'>Wind</h2>
                <p className='reading'>
                    <span>{sol.windSpeed}</span>
                    <span>{isMetric ? ' kph' : ' mph'}</span>
                </p>

                <div className='wind__direction'>
                    <div className='wind__arrow'></div>
                </div>
            </div>
        </div>
      </>
    )
};

export default WeatherData