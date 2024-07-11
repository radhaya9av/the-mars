import React from 'react';
import "../styles/WeatherData.scss";

function WeatherData() {
  
    return(
      <>
        <div className = "Wrapper">
            <div className = "Date">
                <h2>Header</h2>
                <p>Text</p>
            </div>

            <div className = "Temp">
                <h2 className='section-title'>Temp</h2>
                <p className='reading'>
                    High:
                <span> Temp</span>°
                <span> F or C</span>
                </p>
                <p className='reading'>
                    Low:
                <span> Temp</span>°
                <span> F or C</span>
                </p>
            </div>
            <div
            deg={180}
            className = "Wind">
                <h2 className='section-title'>Wind</h2>
                <p className='reading'>
                    <span>Speed</span>
                    <span>kph or mph</span>
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