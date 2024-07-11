import React from 'react';

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
        </div>
      </>
    )
};

export default WeatherData