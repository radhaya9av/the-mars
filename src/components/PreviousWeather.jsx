import React from 'react';

function PreviousWeather() {
  
    return(
      <>
        <div
        previous={false}
        className = "PreviousWrapper">
            <div
            htmlFor='weather-toggle'
            className = "Toggle">
                <span>&#8593;</span>
                <span className='sr-only'>Show previous weather</span>
            </div>

            <h2 className='main-title previous-weather__title'>Previous 7 days</h2>
            <div className = "PreviousDays">Previous days</div>
        </div>
      </>
    )
};

export default PreviousWeather