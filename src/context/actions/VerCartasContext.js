import React, { createContext, useState } from 'react';

export const VerCartasContext = createContext();

export const VerCartasContextProvider = ({children}) => {
    // Set ver cartas 
    const [ver, setVer] = useState(false);

    return (
        <VerCartasContext.Provider value={[ver, setVer]}>
            {children}
        </VerCartasContext.Provider>
    )
};