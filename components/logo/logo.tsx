import React from 'react';
import styles from './logo.module.css';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src={'/images/logo/logo_4.png'} alt='francesca' width={0} height={0} className={styles.img} unoptimized={true} quality={100}/>
        </div>
    )
}

export default Logo;
