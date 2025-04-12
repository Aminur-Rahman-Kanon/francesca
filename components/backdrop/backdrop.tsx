'use client';

import React from 'react';
import styles from './backdrop.module.css';
import Image from 'next/image';
import { useContextProvider } from '../contextProvider/contextProvider';

const Backdrop = () => {

    const context = useContextProvider();

    return (
        <div className={styles.backdrop} style={context?.ageVerified ? {display: 'none'} : {display: 'flex'}}>
            <Image src={'/images/hero/hero_1.png'} fill alt='francesca' className={styles.img} />
        </div>
    )
}

export default Backdrop
