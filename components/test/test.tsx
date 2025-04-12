'use client'

import React from 'react'
import { useContextProvider } from '../contextProvider/contextProvider';

const Test = ({children}:{children:React.ReactNode}) => {
    const context = useContextProvider();

    if (!context?.ageVerified) return null;

  return (
    <>
        {children}
    </>
  )
}

export default Test
