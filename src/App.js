import React, { useState } from 'react';
import { TresCartasContext } from './context/tiradas/TresCartasContext';
import './styles/styles.js';
import Home from './pages/Home';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <TresCartasContext.Provider value={{counter, setCounter}}>
      <Home />
    </TresCartasContext.Provider>
  );
}

export default App;
