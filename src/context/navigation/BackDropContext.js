import React, { useState, createContext } from 'react';

export const BackDropContext = createContext({});

export const BackDropContextProvider = ({children}) => {
  // Set open backdrop
  const [open, setOpen] = useState(false);

  return (
    <BackDropContext.Provider value={[open, setOpen]}>
        {children}
    </BackDropContext.Provider>
  )
};