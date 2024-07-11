import React from 'react';
import "../styles/Unit.scss"

const Unit = ({ metric, setMetric }) => {
  
    return(
      <>
        <div className = "UnitStyles">
            <label htmlFor='cel'>°C</label>
            <div
            metric={metric} onClick={() => setMetric((prev) => !prev)}
            className = "Toggle"></div>
            <label htmlFor='fah'>°F</label>
        </div>
      </>
    )
};

export default Unit