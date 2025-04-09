'use client'

import React, { createContext, useContext, useState } from 'react';

export interface ContextType {
    sidedrawer: boolean,
    openSideDrawer: () => void,
    closeSideDrawer: () => void,
    toggleSideDrawer: () => void
}

export const GlobalContext = createContext<ContextType | null>(null)


export function ContextProvider ({ children }: { children:React.ReactNode }) {
    
    const [sidedrawer, setSidedrawer] = useState<boolean>(false);

    const contextData:ContextType = {
        sidedrawer,
        openSideDrawer: () => setSidedrawer(true),
        closeSideDrawer: () => setSidedrawer(false),
        toggleSideDrawer: () => setSidedrawer(prev => !prev)
    }
    

    return (
        <GlobalContext.Provider value={contextData}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useContextProvider = ():ContextType | null => {
    return useContext(GlobalContext);
}