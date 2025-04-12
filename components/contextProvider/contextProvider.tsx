'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ContextType {
    ageVerified: boolean,
    sidedrawer: boolean,
    openSideDrawer: () => void,
    closeSideDrawer: () => void,
    toggleSideDrawer: () => void,
    confirmAgeRestriction: (value:boolean) => void
}

export const GlobalContext = createContext<ContextType | null>(null)


export function ContextProvider ({ children }: { children:React.ReactNode }) {

    
    const [sidedrawer, setSidedrawer] = useState<boolean>(false);
    const [ageVerified, setAgeVerified] = useState<boolean>(false);

    useEffect(() => {
        const checkAge:string | null = localStorage.getItem('checkAge');

        if (checkAge === 'true'){
            setAgeVerified(true);
        }
        else {
            setAgeVerified(false);
        }
    }, [])

    const contextData:ContextType = {
        ageVerified,
        sidedrawer,
        openSideDrawer: () => setSidedrawer(true),
        closeSideDrawer: () => setSidedrawer(false),
        toggleSideDrawer: () => setSidedrawer(prev => !prev),
        confirmAgeRestriction: (value:boolean) => {
            if (value === false) {
                localStorage.setItem('checkAge', 'false');
                setAgeVerified(false);
                window.location.href = 'https://www.google.com';
            }
            else {
                localStorage.setItem('checkAge', 'true');
                setAgeVerified(true);
            }
        }
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