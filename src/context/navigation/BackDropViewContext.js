import React, { useState, createContext } from 'react';

export const BackDropViewContext = createContext({});


export const BackDropViewContextProvider = ({children}) => {
    // Set backdrop view
    const [view, setView] = useState(null);

    return (
      <BackDropViewContext.Provider value={[view, setView]}>
        {children}
      </BackDropViewContext.Provider>
    )
};

export default BackDropViewContextProvider;