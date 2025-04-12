'use client';

import React, { use } from 'react';
import styles from './warning.module.css';
import { useContextProvider } from '../contextProvider/contextProvider';

const Warning = () => {

    const context = useContextProvider();

    return (
        <div className={styles.warning} style={context?.ageVerified ? {display: 'none'} : {display: 'flex'}}>
            <h2 className={styles.headingLarge}>warning!</h2>
            <p className={styles.textSmall}>This website content adult content or nudity.</p>
            <p className={styles.textSmall}>Are you 18 years of age or more?</p>
            <div className={styles.btns}>
                <button className={styles.btn} onClick={() => context?.confirmAgeRestriction(true)}>Yes I am 18+</button>
                <button className={styles.btn} onClick={() => context?.confirmAgeRestriction(false)}>No Take me back</button>
            </div>
        </div>
    )
}

export default Warning
