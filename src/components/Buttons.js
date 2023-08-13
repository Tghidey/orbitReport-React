import React from 'react';

function Buttons({ filterByType, setSat, displaySats }) {
  const handleButtonClick = (type) => {
    if (type === 'All') {
      setSat(displaySats);
    } else {
      filterByType(type);
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Low')}>Low Orbit</button>
      <button onClick={() => handleButtonClick('Medium')}>Medium Orbit</button>
      <button onClick={() => handleButtonClick('High')}>High Orbit</button>
      <button onClick={() => handleButtonClick('All')}>All Orbits</button>
    </div>
  );
}

export default Buttons;
