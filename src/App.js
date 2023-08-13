import React, { useState } from 'react';
import satData from './components/satData'; // Import from the correct location
import Buttons from './components/Buttons'; // Import from the correct location
import Table from './components/Table'; // Import from the correct location
import Banner from './components/Banner'; // Import from the correct location

function App() {
  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;
