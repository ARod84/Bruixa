import React, { createContext, useState } from 'react';

export const TresCartasContext = createContext();

export const TresCartasContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  return (
    <TresCartasContext.Provider value={[counter, setCounter]}>
      {children}
    </TresCartasContext.Provider>
  )
};

