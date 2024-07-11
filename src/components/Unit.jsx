import React from 'react';
import "../styles/Unit.scss"

function Unit() {
  
    return(
      <>
        <div className = "UnitStyles">
            <label htmlFor='cel'>°C</label>
            <div className = "Toggle"></div>
            <label htmlFor='fah'>°F</label>
        </div>
      </>
    )
};

export default Unit