'use client'

import React, { createContext, useContext, useState } from 'react';

const DrawerContext = createContext<any>(null);

export function ContextProvider ({ children }: { children:React.ReactNode }) {

    const [sidedrawer, setSidedrawer] = useState<boolean>(false);

    const openSideDrawer = () => setSidedrawer(true);
    const closeSideDrawer = () => setSidedrawer(false);
    const toggleSideDrawer = () => setSidedrawer(prev => !prev);

    return (
        <DrawerContext.Provider value={{ sidedrawer, openSideDrawer, closeSideDrawer, toggleSideDrawer }}>
            {children}
        </DrawerContext.Provider>
    )
}

export function useContextProvider() {
    return useContext(DrawerContext);
}